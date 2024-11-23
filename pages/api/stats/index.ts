import { calculateSaveDeathRatio } from '@/utils/calculateSaveDeathRatio'
import { PlayerStats } from '@/interfaces/player'
import { NextApiRequest, NextApiResponse } from 'next'
import { mapKeysToSnakeCase } from '@/utils/mapKeysToSnakeCase'
import { calculateTotals } from '@/utils/calculateTotals'
import { mockApiData } from '@/constants'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const apiKey = process.env.API_KEY

  try {
    if (!apiKey) {
      throw new Error()
    }

    const response = await fetch(apiKey, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data =
      process.env.NODE_ENV === 'development'
        ? mockApiData
        : await response.json()

    // if the data volume increases here we will need to implement a cache/invalidation method
    const formattedData = data.map((elem: PlayerStats) => {
      const newObject: Partial<PlayerStats> = {}

      Object.entries(elem).forEach(([key, value]) => {
        newObject[mapKeysToSnakeCase(key) as keyof PlayerStats] = value
      })

      newObject['battleTag'] = newObject.battleTag?.split('#')[0]

      newObject['saveDeathRatio'] = calculateSaveDeathRatio(
        newObject.saves || 0,
        newObject.deaths || 0,
      )

      newObject['gamesPlayed'] = calculateTotals(
        newObject.normalGames,
        newObject.hardGames,
        newObject.impossibleGames,
      )

      newObject['wins'] = calculateTotals(
        newObject.normalWins,
        newObject.hardWins,
        newObject.impossibleWins,
      )

      return newObject
    })

    res
      .status(200)
      .setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=86400',
      )
      .json(formattedData)
  } catch (error) {
    console.error('Error fetching scoreboard data:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
