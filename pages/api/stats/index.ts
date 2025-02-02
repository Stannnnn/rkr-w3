import { calculateSaveDeathRatio } from '@/utils/calculateSaveDeathRatio'
import { ApiPlayerStats, PlayerStats } from '@/interfaces/player'
import { NextApiRequest, NextApiResponse } from 'next'
import { calculateTotals } from '@/utils/calculateTotals'
import { mockApiData, tournamentAwards } from '@/constants'
import { calculateCompletedChallenges } from '@/utils/calculateCompletedChallenges'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const apiKey = process.env.API_KEY

  try {
    if (!apiKey) {
      throw new Error()
    }

    let data = []

    if (process.env.NODE_ENV === 'development') {
      data = mockApiData
    } else {
      const response = await fetch(apiKey, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      data = await response.json()
    }

    const formattedData = data.map((elem: ApiPlayerStats) => {
      const saveData = JSON.parse(elem['Save Data'])

      const { GameStats, PlayerName, GameAwards, GameAwardsSorted } = saveData
      const playerStats: Partial<PlayerStats> = {}

      if (GameAwardsSorted) {
        playerStats.completedChallenges =
          calculateCompletedChallenges(GameAwardsSorted)
      } else {
        // For retrocompatibility with data shape prev to 1.0.3 version
        const awardValues = Object.entries(GameAwards)
        const generalValues = awardValues.filter(
          ([key]) => !tournamentAwards.includes(key),
        )
        const tournamentValues = awardValues.filter(([key]) =>
          tournamentAwards.includes(key),
        )

        playerStats.completedChallenges = {
          general: [
            generalValues.filter(([, value]) => value).length,
            generalValues.length,
          ],
          tournament: [
            tournamentValues.filter(([, value]) => value).length,
            tournamentValues.length,
          ],
        }
      }
      playerStats.saves = GameStats.Saves
      playerStats.highestWinStreak = GameStats.HighestWinStreak
      playerStats.highestSaveStreak = GameStats.HighestSaveStreak

      playerStats['battleTag'] = {
        name: PlayerName?.split('#')[0] || '',
        tag: PlayerName || '',
      }

      playerStats['saveDeathRatio'] = calculateSaveDeathRatio(
        GameStats.Saves,
        GameStats.Deaths,
      )

      playerStats['gamesPlayed'] = calculateTotals(
        GameStats.NormalGames,
        GameStats.HardGames,
        GameStats.ImpossibleGames,
      )

      playerStats['wins'] = calculateTotals(
        GameStats.NormalWins,
        GameStats.HardWins,
        GameStats.ImpossibleWins,
      )
      return playerStats
    })

    res.status(200).json(formattedData)
  } catch (error) {
    console.error('Error fetching scoreboard data:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
