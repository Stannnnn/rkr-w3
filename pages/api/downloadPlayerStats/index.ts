import { NextApiRequest, NextApiResponse } from 'next'
import { formatSaveDataFile } from '@/utils/formatSaveDataFile'
import { fetchData } from '@/utils/fetchData'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { battleTag } = req.query

    if (!battleTag) {
      throw new Error('Please provide a valid battleTag')
    }

    const data = await fetchData('players', `battletag=${battleTag}`)

    const playerData = data[0]

    const fileFormattedSaveData = formatSaveDataFile(playerData['Save Data'])

    res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Disposition', 'attachment; filename="file.txt"')
    res.status(200)
    res.send(fileFormattedSaveData)
  } catch (error) {
    console.error('Error fetching scoreboard data:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
