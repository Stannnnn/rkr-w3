import { calculateSaveDeathRatio } from '@/utils/calculateSaveDeathRatio'
import { DetailedPlayerStats } from '@/interfaces/player'
import { NextApiRequest, NextApiResponse } from 'next'
import { formatRoundsData } from '@/utils/formatRoundsData'
import { calculateTotals } from '@/utils/calculateTotals'
import { blacklistedPlayers, roundNames } from '@/constants'
import { formatGameAwards } from '@/utils/formatGameAwards'
import { transformKeysToCamelCase } from '@/utils/transformKeysToCamelCase'
import { calculateWinRate } from '@/utils/calculateWinRate'
import { fetchData } from '@/utils/fetchData'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const data = await fetchData('players', `battletag=${req.body.battleTag}`)

    const playerData = data[0]

    if (blacklistedPlayers.find((player) => player === playerData.battletag)) {
      throw new Error()
    }

    const saveData = JSON.parse(playerData['Save Data'])
    const playerStats: Partial<DetailedPlayerStats> = {}
    const {
      GameStats,
      RoundTimes,
      PlayerName,
      GameAwards,
      GameAwardsSorted,
      SelectedData,
    } = saveData

    playerStats.lastUploaded = playerData.UploadDate
    playerStats.saves = GameStats.Saves
    playerStats.deaths = GameStats.Deaths
    playerStats.highestWinStreak = GameStats.HighestWinStreak

    if (GameAwardsSorted) {
      playerStats.saveStreak = {
        highestSaveStreak: GameStats.HighestSaveStreak,
        redLightning: !!GameAwardsSorted.Trails.RedLightning,
        patrioticTendrils: !!GameAwardsSorted.Wings.PatrioticTendrils,
      }
    } else {
      playerStats.saveStreak = {
        highestSaveStreak: GameStats.HighestSaveStreak,
        redLightning: !!GameAwards.RedLightning,
        patrioticTendrils: !!GameAwards.PatrioticTendrils,
      }
    }

    playerStats.awards = formatGameAwards(GameAwardsSorted)
    playerStats.skins = transformKeysToCamelCase(SelectedData)
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

    playerStats['winRate'] = calculateWinRate(
      playerStats.wins.total,
      playerStats.gamesPlayed.total,
    )

    roundNames.forEach((round) => {
      playerStats[`round${round}`] = formatRoundsData(RoundTimes, round)
    })

    res.status(200).json(playerStats)
  } catch (error) {
    console.error('Error fetching scoreboard data:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
