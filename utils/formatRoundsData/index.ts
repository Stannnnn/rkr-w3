import { PlayerStats } from '@/interfaces/player'
import { calculateBestTimeByDifficulty } from '../calculateBestTimeByDifficulty'

export const formatRoundsData = (
  newObject: Partial<PlayerStats>,
  round: 1 | 2 | 3 | 4 | 5,
) => {
  const normal = newObject[`round_${round}_time_normal`] || 0
  const hard = newObject[`round_${round}_time_hard`] || 0
  const impossible = newObject[`round_${round}_time_impossible`] || 0

  return {
    normal,
    hard,
    impossible,
    best: calculateBestTimeByDifficulty({ normal, hard, impossible }),
  }
}
