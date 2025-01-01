import { Difficulty } from '../difficulty'

export interface PlayerStats {
  battleTag: BattleTag
  saves: number
  deaths: number
  highestSaveStreak: number
  highestWinStreak: number
  completedChallenges: [number, number]
  saveDeathRatio: number
  gamesPlayed: DifficultyStats
  wins: DifficultyStats
  roundOne: RoundStats
  roundTwo: RoundStats
  roundThree: RoundStats
  roundFour: RoundStats
  roundFive: RoundStats
}

export interface FromattedApiPlayerStats {
  battleTag: string
  saves: number
  deaths: number
  normalGames: number
  hardGames: number
  impossibleGames: number
  highestSaveStreak: number
  highestWinStreak: number
  normalWins: number
  hardWins: number
  impossibleWins: number
  RoundOneNormal: number
  RoundTwoNormal: number
  RoundThreeNormal: number
  RoundFourNormal: number
  RoundFiveNormal: number
  RoundOneHard: number
  RoundTwoHard: number
  RoundThreeHard: number
  RoundFourHard: number
  RoundFiveHard: number
  RoundOneImpossible: number
  RoundTwoImpossible: number
  RoundThreeImpossible: number
  RoundFourImpossible: number
  RoundFiveImpossible: number
  completedChallenges: string
}

export interface ApiPlayerStats {
  BattleTag: string
  'Save Data': string
}

export interface BattleTag {
  name: string
  tag: string
}
export interface RoundStats {
  hard: number
  normal: number
  impossible: number
  best: BestTime
}

export interface BestTime {
  time: number
  difficulty: Difficulty
}

export interface DifficultyStats {
  hard: number
  normal: number
  impossible: number
  total: number
}

export type PlayersStats = PlayerStats[]
