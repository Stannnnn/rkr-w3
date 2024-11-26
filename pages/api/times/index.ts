import {
  ApiPlayerStats,
  FromattedApiPlayerStats,
  PlayerStats,
} from '@/interfaces/player'
import { NextApiRequest, NextApiResponse } from 'next'
import { mapKeysToSnakeCase } from '@/utils/mapKeysToSnakeCase'
import { formatRoundsData } from '@/utils/formatRoundsData'
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
    const formattedData = data.map((elem: ApiPlayerStats) => {
      const newObject: Partial<FromattedApiPlayerStats> = {}
      const playerStats: Partial<PlayerStats> = {}

      Object.entries(elem).forEach(([key, value]) => {
        const camelCaseKey = mapKeysToSnakeCase(key)
        newObject[camelCaseKey as keyof FromattedApiPlayerStats] = value
      })

      playerStats['battleTag'] = {
        name: newObject.battleTag?.split('#')[0] || '',
        tag: newObject.battleTag || '',
      }

      const rounds = [1, 2, 3, 4, 5] as const

      rounds.forEach((round) => {
        playerStats[`r${round}`] = formatRoundsData(newObject, round)
      })

      return playerStats
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
