import { PlayerStats } from '@/interfaces/player'

export const blizzardLink = 'https://www.blizzard.com/'
export const discordData =
  'https://discord.com/api/v9/invites/GSu6zkNvx5?with_counts=true&with_expiration=false'

export const discordJoinLink = 'https://discord.com/invite/GSu6zkNvx5'

export const githubReadMeLink =
  'https://github.com/melisa-abuin/rkr-w3/blob/main/README.md'

export const pageSize = 10
export const routes = {
  home: {
    label: 'Home',
    url: '/',
  },
  /* 
  disabled until I can meassure videos impact on vercel limits
  howToPlay: {
    label: 'How To Play',
    url: '/how-to-play',
  },*/
  leaderboard: {
    label: 'Leaderboard',
    url: '/leaderboard',
  },
  download: {
    label: 'Download v4.3.5',
    url: 'https://www.epicwar.com/maps/340396/',
  },
}

export const statsColumns: { title: string; key: keyof PlayerStats }[] = [
  { title: 'Player', key: 'battleTag' },
  { title: 'Completed Challenges', key: 'completedChallenges' },
  { title: 'Saves', key: 'saves' },
  { title: 'S/D Ratio', key: 'saveDeathRatio' },
  { title: 'Games Played', key: 'gamesPlayed' },
  { title: 'Wins', key: 'wins' },
  { title: 'Highest Save Streak', key: 'highestSaveStreak' },
  { title: 'Highest Win Streak', key: 'highestWinStreak' },
]

export const timeAllDiffColumns: { title: string; key: keyof PlayerStats }[] = [
  { title: 'Player', key: 'battleTag' },
  { title: 'Best R1 Times', key: 'r1' },
  { title: 'Best R2 Times', key: 'r2' },
  { title: 'Best R3 Times', key: 'r3' },
  { title: 'Best R4 Times', key: 'r4' },
  { title: 'Best R5 Times', key: 'r5' },
]

export const tricks = [
  {
    alt: 'Dog trick button',
    icon: 'paw-heart',
    text: 'If someone saves you and you are inside a dog, you can move through him without dying. This way you can overcome dog walls or take a path blocked for the one who saved you.',
    videoUrl: '/save.mp4',
  },
  {
    alt: 'Group trick button',
    icon: 'two-users',
    text: 'In order to control two different kitties at the same time you must set up 3 control groups. Select your Kitty and press crtl+1, select the other Kitty and press ctrl+2 and now select your Kitty and press shift while you select the other kitty to select both kitties at the same time and finally press ctrl+3 with both kitties selected.',
    videoUrl: '/control-two-kitties.mp4',
  },
  {
    alt: 'Camera angle trick button',
    icon: 'camera-angle',
    text: 'Find out what keys change the camera angle, this is useful for hard saves with almost no visibility.',
    videoUrl: '/camera-angle.mp4',
  },
  {
    alt: 'Center camera trick button',
    icon: 'camera-center',
    text: 'Press F1 or spacebar to center the camera in your Kitty.',
    videoUrl: '/center-camera.mp4',
  },
] as const

export const formattedMockData = [
  {
    battleTag: 'Pablo',
    saves: 100,
    deaths: 871,
    normalGames: 10,
    hardGames: 10,
    impossibleGames: 10,
    highestSaveStreak: 10,
    highestWinStreak: 100,
    normalWins: 25,
    hardWins: 11,
    impossibleWins: 1,
    round1TimeNormal: 100.0,
    round2TimeNormal: 150.0,
    round3TimeNormal: 250.0,
    round4TimeNormal: 350.0,
    round5TimeNormal: 450.0,
    round1TimeHard: 110.0,
    round2TimeHard: 160.0,
    round3TimeHard: 270.0,
    round4TimeHard: 370.0,
    round5TimeHard: 470.0,
    round1TimeImpossible: 120.0,
    round2TimeImpossible: 170.0,
    round3TimeImpossible: 280.0,
    round4TimeImpossible: 380.0,
    round5TimeImpossible: 480.0,
    round1TimeSolo: 95.0,
    round2TimeSolo: 145.0,
    round3TimeSolo: 245.0,
    round4TimeSolo: 345.0,
    round5TimeSolo: 445.0,
    completedChallenges: '56/56',
    saveDeathRatio: 1.63,
    gamesPlayed: {
      normal: 10,
      hard: 10,
      impossible: 10,
      total: 30,
    },
    wins: {
      normal: 25,
      hard: 11,
      impossible: 1,
      total: 37,
    },
    r1: {
      normal: 100.0,
      hard: 110.0,
      impossible: 120.0,
      best: {
        difficulty: 'normal',
        time: 100.0,
      },
    },
    r2: {
      normal: 150.0,
      hard: 160.0,
      impossible: 170.0,
      best: {
        difficulty: 'normal',
        time: 150.0,
      },
    },
    r3: {
      normal: 250.0,
      hard: 270.0,
      impossible: 280.0,
      best: {
        difficulty: 'normal',
        time: 250.0,
      },
    },
    r4: {
      normal: 350.0,
      hard: 370.0,
      impossible: 380.0,
      best: {
        difficulty: 'normal',
        time: 350.0,
      },
    },
    r5: {
      normal: 450.0,
      hard: 470.0,
      impossible: 480.0,
      best: {
        difficulty: 'normal',
        time: 450.0,
      },
    },
  },
  {
    battleTag: 'Gonza',
    saves: 50,
    deaths: 871,
    normalGames: 39,
    hardGames: 16,
    impossibleGames: 15,
    highestSaveStreak: 10,
    highestWinStreak: 100,
    normalWins: 25,
    hardWins: 11,
    impossibleWins: 1,
    round1TimeNormal: 120.0,
    round2TimeNormal: 180.0,
    round3TimeNormal: 280.0,
    round4TimeNormal: 380.0,
    round5TimeNormal: 480.0,
    round1TimeHard: 130.0,
    round2TimeHard: 200.0,
    round3TimeHard: 300.0,
    round4TimeHard: 400.0,
    round5TimeHard: 500.0,
    round1TimeImpossible: 140.0,
    round2TimeImpossible: 210.0,
    round3TimeImpossible: 320.0,
    round4TimeImpossible: 420.0,
    round5TimeImpossible: 520.0,
    round1TimeSolo: 115.0,
    round2TimeSolo: 175.0,
    round3TimeSolo: 275.0,
    round4TimeSolo: 375.0,
    round5TimeSolo: 475.0,
    completedChallenges: '56/56',
    saveDeathRatio: 1.63,
    gamesPlayed: {
      normal: 39,
      hard: 16,
      impossible: 15,
      total: 70,
    },
    wins: {
      normal: 25,
      hard: 11,
      impossible: 1,
      total: 37,
    },
    r1: {
      normal: 120.0,
      hard: 130.0,
      impossible: 140.0,
      best: {
        difficulty: 'normal',
        time: 120.0,
      },
    },
    r2: {
      normal: 180.0,
      hard: 200.0,
      impossible: 210.0,
      best: {
        difficulty: 'normal',
        time: 180.0,
      },
    },
    r3: {
      normal: 280.0,
      hard: 300.0,
      impossible: 320.0,
      best: {
        difficulty: 'normal',
        time: 280.0,
      },
    },
    r4: {
      normal: 380.0,
      hard: 400.0,
      impossible: 420.0,
      best: {
        difficulty: 'normal',
        time: 380.0,
      },
    },
    r5: {
      normal: 480.0,
      hard: 500.0,
      impossible: 520.0,
      best: {
        difficulty: 'normal',
        time: 480.0,
      },
    },
  },
] as const

export const mockApiData = [
  {
    BattleTag: 'Pablo#12345',
    Saves: 1423,
    Deaths: 871,
    'Normal Games': 39,
    'Hard Games': 16,
    'Impossible Games': 15,
    'Highest Save Streak': 10,
    'Highest Win Streak': 100,
    'Normal Wins': 25,
    'Hard Wins': 11,
    'Impossible Wins': 1,
    'Round 1 Time : Normal': 134.6,
    'Round 2 Time : Normal': 197.7,
    'Round 3 Time : Normal': 342.7,
    'Round 4 Time : Normal': 475.1,
    'Round 5 Time : Normal': 550.5,
    'Round 1 Time : Hard': 124.5,
    'Round 2 Time : Hard': 230.3,
    'Round 3 Time : Hard': 362.7,
    'Round 4 Time : Hard': 494.7,
    'Round 5 Time : Hard': 582.4,
    'Round 1 Time : Impossible': 159.3,
    'Round 2 Time : Impossible': 231.7,
    'Round 3 Time : Impossible': 387.4,
    'Round 4 Time : Impossible': 505.6,
    'Round 5 Time : Impossible': 602.8,
    'Round 1 Time : Solo': 125.4,
    'Round 2 Time : Solo': 187.2,
    'Round 3 Time : Solo': 319.8,
    'Round 4 Time : Solo': 450.4,
    'Round 5 Time : Solo': 526.5,
    'Completed Challenges': '56/56',
  },
  {
    BattleTag: 'Pedro#12345',
    Saves: 20,
    Deaths: 100,
    'Normal Games': 37,
    'Hard Games': 16,
    'Impossible Games': 9,
    'Highest Save Streak': 20,
    'Highest Win Streak': 70,
    'Normal Wins': 23,
    'Hard Wins': 14,
    'Impossible Wins': 4,
    'Round 1 Time : Normal': 138.4,
    'Round 2 Time : Normal': 205.7,
    'Round 3 Time : Normal': 360.2,
    'Round 4 Time : Normal': 465.2,
    'Round 5 Time : Normal': 554.2,
    'Round 1 Time : Hard': 154.9,
    'Round 2 Time : Hard': 215.2,
    'Round 3 Time : Hard': 380.5,
    'Round 4 Time : Hard': 509.7,
    'Round 5 Time : Hard': 575,
    'Round 1 Time : Impossible': 167.1,
    'Round 2 Time : Impossible': 236.4,
    'Round 3 Time : Impossible': 394.3,
    'Round 4 Time : Impossible': 506.1,
    'Round 5 Time : Impossible': 597.4,
    'Round 1 Time : Solo': 115,
    'Round 2 Time : Solo': 175.1,
    'Round 3 Time : Solo': 319.9,
    'Round 4 Time : Solo': 443.7,
    'Round 5 Time : Solo': 522.7,
    'Completed Challenges': '46/56',
  },
  {
    BattleTag: 'Jamie#11223',
    Saves: 101,
    Deaths: 100,
    'Normal Games': 21,
    'Hard Games': 24,
    'Impossible Games': 5,
    'Highest Save Streak': 24,
    'Highest Win Streak': 116,
    'Normal Wins': 25,
    'Hard Wins': 6,
    'Impossible Wins': 2,
    'Round 1 Time : Normal': 139.9,
    'Round 2 Time : Normal': 206.2,
    'Round 3 Time : Normal': 353,
    'Round 4 Time : Normal': 465.3,
    'Round 5 Time : Normal': 556.6,
    'Round 1 Time : Hard': 141.3,
    'Round 2 Time : Hard': 226.6,
    'Round 3 Time : Hard': 360.4,
    'Round 4 Time : Hard': 510.7,
    'Round 5 Time : Hard': 589.2,
    'Round 1 Time : Impossible': 170.8,
    'Round 2 Time : Impossible': 240.6,
    'Round 3 Time : Impossible': 385.6,
    'Round 4 Time : Impossible': 516.7,
    'Round 5 Time : Impossible': 601.5,
    'Round 1 Time : Solo': 126.4,
    'Round 2 Time : Solo': 178.6,
    'Round 3 Time : Solo': 311.3,
    'Round 4 Time : Solo': 446.8,
    'Round 5 Time : Solo': 517.4,
    'Completed Challenges': '36/56',
  },
  {
    BattleTag: 'Juan#12345',
    Saves: 1041,
    Deaths: 876,
    'Normal Games': 29,
    'Hard Games': 14,
    'Impossible Games': 5,
    'Highest Save Streak': 20,
    'Highest Win Streak': 88,
    'Normal Wins': 22,
    'Hard Wins': 12,
    'Impossible Wins': 2,
    'Round 1 Time : Normal': 150.4,
    'Round 2 Time : Normal': 209.9,
    'Round 3 Time : Normal': 353.7,
    'Round 4 Time : Normal': 479.1,
    'Round 5 Time : Normal': 560.1,
    'Round 1 Time : Hard': 141.4,
    'Round 2 Time : Hard': 216.6,
    'Round 3 Time : Hard': 361.9,
    'Round 4 Time : Hard': 510,
    'Round 5 Time : Hard': 577.3,
    'Round 1 Time : Impossible': 159.7,
    'Round 2 Time : Impossible': 235,
    'Round 3 Time : Impossible': 400.7,
    'Round 4 Time : Impossible': 502.3,
    'Round 5 Time : Impossible': 590.1,
    'Round 1 Time : Solo': 121.1,
    'Round 2 Time : Solo': 172.5,
    'Round 3 Time : Solo': 317.6,
    'Round 4 Time : Solo': 447.7,
    'Round 5 Time : Solo': 518.4,
    'Completed Challenges': '26/56',
  },
  {
    BattleTag: 'Chris#98765',
    Saves: 1145,
    Deaths: 995,
    'Normal Games': 30,
    'Hard Games': 11,
    'Impossible Games': 13,
    'Highest Save Streak': 19,
    'Highest Win Streak': 67,
    'Normal Wins': 29,
    'Hard Wins': 15,
    'Impossible Wins': 4,
    'Round 1 Time : Normal': 148.7,
    'Round 2 Time : Normal': 207.7,
    'Round 3 Time : Normal': 343.2,
    'Round 4 Time : Normal': 470.3,
    'Round 5 Time : Normal': 547.9,
    'Round 1 Time : Hard': 154.1,
    'Round 2 Time : Hard': 210.2,
    'Round 3 Time : Hard': 376,
    'Round 4 Time : Hard': 493.9,
    'Round 5 Time : Hard': 571.2,
    'Round 1 Time : Impossible': 168.6,
    'Round 2 Time : Impossible': 244.4,
    'Round 3 Time : Impossible': 380.3,
    'Round 4 Time : Impossible': 520.8,
    'Round 5 Time : Impossible': 600.6,
    'Round 1 Time : Solo': 126,
    'Round 2 Time : Solo': 177.3,
    'Round 3 Time : Solo': 307.5,
    'Round 4 Time : Solo': 444,
    'Round 5 Time : Solo': 511.9,
    'Completed Challenges': '16/56',
  },
  {
    BattleTag: 'Drew#88990',
    Saves: 930,
    Deaths: 842,
    'Normal Games': 35,
    'Hard Games': 22,
    'Impossible Games': 12,
    'Highest Save Streak': 23,
    'Highest Win Streak': 106,
    'Normal Wins': 20,
    'Hard Wins': 7,
    'Impossible Wins': 2,
    'Round 1 Time : Normal': 146.5,
    'Round 2 Time : Normal': 208.1,
    'Round 3 Time : Normal': 340.7,
    'Round 4 Time : Normal': 474.1,
    'Round 5 Time : Normal': 550.6,
    'Round 1 Time : Hard': 145.6,
    'Round 2 Time : Hard': 220.6,
    'Round 3 Time : Hard': 379.8,
    'Round 4 Time : Hard': 491,
    'Round 5 Time : Hard': 572.5,
    'Round 1 Time : Impossible': 163,
    'Round 2 Time : Impossible': 250.7,
    'Round 3 Time : Impossible': 397.7,
    'Round 4 Time : Impossible': 502.4,
    'Round 5 Time : Impossible': 596.9,
    'Round 1 Time : Solo': 114.7,
    'Round 2 Time : Solo': 190.2,
    'Round 3 Time : Solo': 318.9,
    'Round 4 Time : Solo': 442.7,
    'Round 5 Time : Solo': 511,
    'Completed Challenges': '16/56',
  },
  {
    BattleTag: 'Sam#54321',
    Saves: 871,
    Deaths: 727,
    'Normal Games': 40,
    'Hard Games': 16,
    'Impossible Games': 10,
    'Highest Save Streak': 26,
    'Highest Win Streak': 112,
    'Normal Wins': 22,
    'Hard Wins': 8,
    'Impossible Wins': 3,
    'Round 1 Time : Normal': 139.4,
    'Round 2 Time : Normal': 195.7,
    'Round 3 Time : Normal': 358.7,
    'Round 4 Time : Normal': 474.4,
    'Round 5 Time : Normal': 560.5,
    'Round 1 Time : Hard': 150.7,
    'Round 2 Time : Hard': 216.1,
    'Round 3 Time : Hard': 361.1,
    'Round 4 Time : Hard': 508.5,
    'Round 5 Time : Hard': 576.2,
    'Round 1 Time : Impossible': 157.3,
    'Round 2 Time : Impossible': 244.7,
    'Round 3 Time : Impossible': 392.1,
    'Round 4 Time : Impossible': 503.2,
    'Round 5 Time : Impossible': 604.2,
    'Round 1 Time : Solo': 119.2,
    'Round 2 Time : Solo': 188.3,
    'Round 3 Time : Solo': 301.2,
    'Round 4 Time : Solo': 440.6,
    'Round 5 Time : Solo': 512.3,
    'Completed Challenges': '3/56',
  },
  {
    BattleTag: 'Sam#54321',
    Saves: 904,
    Deaths: 722,
    'Normal Games': 35,
    'Hard Games': 11,
    'Impossible Games': 8,
    'Highest Save Streak': 23,
    'Highest Win Streak': 103,
    'Normal Wins': 26,
    'Hard Wins': 10,
    'Impossible Wins': 1,
    'Round 1 Time : Normal': 133.4,
    'Round 2 Time : Normal': 195.6,
    'Round 3 Time : Normal': 346,
    'Round 4 Time : Normal': 475.1,
    'Round 5 Time : Normal': 547.1,
    'Round 1 Time : Hard': 145.6,
    'Round 2 Time : Hard': 218.1,
    'Round 3 Time : Hard': 373.1,
    'Round 4 Time : Hard': 492.4,
    'Round 5 Time : Hard': 586.9,
    'Round 1 Time : Impossible': 170.8,
    'Round 2 Time : Impossible': 242.5,
    'Round 3 Time : Impossible': 386.5,
    'Round 4 Time : Impossible': 519.9,
    'Round 5 Time : Impossible': 594.1,
    'Round 1 Time : Solo': 124.1,
    'Round 2 Time : Solo': 175,
    'Round 3 Time : Solo': 316.7,
    'Round 4 Time : Solo': 442.7,
    'Round 5 Time : Solo': 521.3,
    'Completed Challenges': '8/56',
  },
  {
    BattleTag: 'Jamie#11223',
    Saves: 845,
    Deaths: 824,
    'Normal Games': 26,
    'Hard Games': 18,
    'Impossible Games': 10,
    'Highest Save Streak': 29,
    'Highest Win Streak': 94,
    'Normal Wins': 23,
    'Hard Wins': 5,
    'Impossible Wins': 3,
    'Round 1 Time : Normal': 137.5,
    'Round 2 Time : Normal': 210,
    'Round 3 Time : Normal': 344.9,
    'Round 4 Time : Normal': 467.3,
    'Round 5 Time : Normal': 560.2,
    'Round 1 Time : Hard': 145.4,
    'Round 2 Time : Hard': 211.3,
    'Round 3 Time : Hard': 380.1,
    'Round 4 Time : Hard': 498.6,
    'Round 5 Time : Hard': 575.6,
    'Round 1 Time : Impossible': 166.6,
    'Round 2 Time : Impossible': 233.1,
    'Round 3 Time : Impossible': 388,
    'Round 4 Time : Impossible': 518.5,
    'Round 5 Time : Impossible': 592.6,
    'Round 1 Time : Solo': 110.7,
    'Round 2 Time : Solo': 190.7,
    'Round 3 Time : Solo': 304.6,
    'Round 4 Time : Solo': 430.6,
    'Round 5 Time : Solo': 525.2,
    'Completed Challenges': '4/56',
  },
  {
    BattleTag: 'Jamie#11223',
    Saves: 925,
    Deaths: 736,
    'Normal Games': 28,
    'Hard Games': 30,
    'Impossible Games': 9,
    'Highest Save Streak': 16,
    'Highest Win Streak': 104,
    'Normal Wins': 21,
    'Hard Wins': 13,
    'Impossible Wins': 3,
    'Round 1 Time : Normal': 147.6,
    'Round 2 Time : Normal': 198.3,
    'Round 3 Time : Normal': 340.3,
    'Round 4 Time : Normal': 461.7,
    'Round 5 Time : Normal': 554.8,
    'Round 1 Time : Hard': 140.7,
    'Round 2 Time : Hard': 210.6,
    'Round 3 Time : Hard': 376.2,
    'Round 4 Time : Hard': 508.2,
    'Round 5 Time : Hard': 580,
    'Round 1 Time : Impossible': 161.6,
    'Round 2 Time : Impossible': 249,
    'Round 3 Time : Impossible': 386.8,
    'Round 4 Time : Impossible': 518,
    'Round 5 Time : Impossible': 595,
    'Round 1 Time : Solo': 116.7,
    'Round 2 Time : Solo': 178.4,
    'Round 3 Time : Solo': 318.3,
    'Round 4 Time : Solo': 438.9,
    'Round 5 Time : Solo': 521.6,
    'Completed Challenges': '13/56',
  },
  {
    BattleTag: 'Chris#98765',
    Saves: 1129,
    Deaths: 764,
    'Normal Games': 34,
    'Hard Games': 28,
    'Impossible Games': 12,
    'Highest Save Streak': 20,
    'Highest Win Streak': 74,
    'Normal Wins': 24,
    'Hard Wins': 5,
    'Impossible Wins': 3,
    'Round 1 Time : Normal': 133.3,
    'Round 2 Time : Normal': 204,
    'Round 3 Time : Normal': 341.8,
    'Round 4 Time : Normal': 463.4,
    'Round 5 Time : Normal': 560.5,
    'Round 1 Time : Hard': 144,
    'Round 2 Time : Hard': 211.5,
    'Round 3 Time : Hard': 380.2,
    'Round 4 Time : Hard': 494,
    'Round 5 Time : Hard': 584.5,
    'Round 1 Time : Impossible': 151.3,
    'Round 2 Time : Impossible': 245.1,
    'Round 3 Time : Impossible': 396.8,
    'Round 4 Time : Impossible': 509.3,
    'Round 5 Time : Impossible': 599.4,
    'Round 1 Time : Solo': 113,
    'Round 2 Time : Solo': 175.7,
    'Round 3 Time : Solo': 319.8,
    'Round 4 Time : Solo': 436.1,
    'Round 5 Time : Solo': 525.9,
    'Completed Challenges': '4/56',
  },
  {
    BattleTag: 'Sam#54321',
    Saves: 1187,
    Deaths: 745,
    'Normal Games': 34,
    'Hard Games': 30,
    'Impossible Games': 13,
    'Highest Save Streak': 18,
    'Highest Win Streak': 50,
    'Normal Wins': 24,
    'Hard Wins': 10,
    'Impossible Wins': 3,
    'Round 1 Time : Normal': 148,
    'Round 2 Time : Normal': 195.6,
    'Round 3 Time : Normal': 349,
    'Round 4 Time : Normal': 460.6,
    'Round 5 Time : Normal': 547.6,
    'Round 1 Time : Hard': 152.2,
    'Round 2 Time : Hard': 226.5,
    'Round 3 Time : Hard': 378.1,
    'Round 4 Time : Hard': 503.5,
    'Round 5 Time : Hard': 584.4,
    'Round 1 Time : Impossible': 166.2,
    'Round 2 Time : Impossible': 230.1,
    'Round 3 Time : Impossible': 385.4,
    'Round 4 Time : Impossible': 514.4,
    'Round 5 Time : Impossible': 602.4,
    'Round 1 Time : Solo': 119.1,
    'Round 2 Time : Solo': 174.9,
    'Round 3 Time : Solo': 305.1,
    'Round 4 Time : Solo': 433.5,
    'Round 5 Time : Solo': 519,
    'Completed Challenges': '12/56',
  },
  {
    BattleTag: 'Drew#88990',
    Saves: 936,
    Deaths: 710,
    'Normal Games': 34,
    'Hard Games': 24,
    'Impossible Games': 6,
    'Highest Save Streak': 12,
    'Highest Win Streak': 95,
    'Normal Wins': 23,
    'Hard Wins': 7,
    'Impossible Wins': 5,
    'Round 1 Time : Normal': 146.7,
    'Round 2 Time : Normal': 202.8,
    'Round 3 Time : Normal': 346.3,
    'Round 4 Time : Normal': 463.2,
    'Round 5 Time : Normal': 554.5,
    'Round 1 Time : Hard': 148.5,
    'Round 2 Time : Hard': 219.8,
    'Round 3 Time : Hard': 378.7,
    'Round 4 Time : Hard': 510.1,
    'Round 5 Time : Hard': 588.2,
    'Round 1 Time : Impossible': 161.1,
    'Round 2 Time : Impossible': 235.6,
    'Round 3 Time : Impossible': 399.6,
    'Round 4 Time : Impossible': 520.7,
    'Round 5 Time : Impossible': 608.2,
    'Round 1 Time : Solo': 128,
    'Round 2 Time : Solo': 176.3,
    'Round 3 Time : Solo': 317.4,
    'Round 4 Time : Solo': 446,
    'Round 5 Time : Solo': 526.3,
    'Completed Challenges': '4/56',
  },
  {
    BattleTag: 'Alex#76923',
    Saves: 1044,
    Deaths: 955,
    'Normal Games': 27,
    'Hard Games': 29,
    'Impossible Games': 15,
    'Highest Save Streak': 22,
    'Highest Win Streak': 98,
    'Normal Wins': 23,
    'Hard Wins': 12,
    'Impossible Wins': 3,
    'Round 1 Time : Normal': 130.5,
    'Round 2 Time : Normal': 192.8,
    'Round 3 Time : Normal': 341.6,
    'Round 4 Time : Normal': 474.1,
    'Round 5 Time : Normal': 559.2,
    'Round 1 Time : Hard': 149.3,
    'Round 2 Time : Hard': 223.6,
    'Round 3 Time : Hard': 369.3,
    'Round 4 Time : Hard': 508.6,
    'Round 5 Time : Hard': 586.2,
    'Round 1 Time : Impossible': 168.4,
    'Round 2 Time : Impossible': 235.4,
    'Round 3 Time : Impossible': 398.5,
    'Round 4 Time : Impossible': 511.2,
    'Round 5 Time : Impossible': 609.5,
    'Round 1 Time : Solo': 127.3,
    'Round 2 Time : Solo': 186.5,
    'Round 3 Time : Solo': 305.5,
    'Round 4 Time : Solo': 444.3,
    'Round 5 Time : Solo': 518,
    'Completed Challenges': '19/56',
  },
  {
    BattleTag: 'Sam#54321',
    Saves: 921,
    Deaths: 753,
    'Normal Games': 34,
    'Hard Games': 30,
    'Impossible Games': 10,
    'Highest Save Streak': 10,
    'Highest Win Streak': 119,
    'Normal Wins': 28,
    'Hard Wins': 7,
    'Impossible Wins': 4,
    'Round 1 Time : Normal': 136.5,
    'Round 2 Time : Normal': 196.6,
    'Round 3 Time : Normal': 355.1,
    'Round 4 Time : Normal': 462.9,
    'Round 5 Time : Normal': 558,
    'Round 1 Time : Hard': 145.7,
    'Round 2 Time : Hard': 221.9,
    'Round 3 Time : Hard': 370.7,
    'Round 4 Time : Hard': 496.8,
    'Round 5 Time : Hard': 582.5,
    'Round 1 Time : Impossible': 158.9,
    'Round 2 Time : Impossible': 244.2,
    'Round 3 Time : Impossible': 380.9,
    'Round 4 Time : Impossible': 518.5,
    'Round 5 Time : Impossible': 590,
    'Round 1 Time : Solo': 119.6,
    'Round 2 Time : Solo': 175.5,
    'Round 3 Time : Solo': 303.2,
    'Round 4 Time : Solo': 431.1,
    'Round 5 Time : Solo': 518.1,
    'Completed Challenges': '47/56',
  },
  {
    BattleTag: 'Taylor#67890',
    Saves: 865,
    Deaths: 934,
    'Normal Games': 40,
    'Hard Games': 24,
    'Impossible Games': 8,
    'Highest Save Streak': 27,
    'Highest Win Streak': 53,
    'Normal Wins': 25,
    'Hard Wins': 12,
    'Impossible Wins': 3,
    'Round 1 Time : Normal': 142.6,
    'Round 2 Time : Normal': 191.9,
    'Round 3 Time : Normal': 356.1,
    'Round 4 Time : Normal': 468.4,
    'Round 5 Time : Normal': 544.9,
    'Round 1 Time : Hard': 140.1,
    'Round 2 Time : Hard': 229,
    'Round 3 Time : Hard': 380.1,
    'Round 4 Time : Hard': 507.2,
    'Round 5 Time : Hard': 572.4,
    'Round 1 Time : Impossible': 166.5,
    'Round 2 Time : Impossible': 237.7,
    'Round 3 Time : Impossible': 396.6,
    'Round 4 Time : Impossible': 517.8,
    'Round 5 Time : Impossible': 607.4,
    'Round 1 Time : Solo': 121.2,
    'Round 2 Time : Solo': 186.3,
    'Round 3 Time : Solo': 311.4,
    'Round 4 Time : Solo': 442.3,
    'Round 5 Time : Solo': 513.2,
    'Completed Challenges': '18/56',
  },
  {
    BattleTag: 'Alex#76923',
    Saves: 950,
    Deaths: 944,
    'Normal Games': 35,
    'Hard Games': 13,
    'Impossible Games': 12,
    'Highest Save Streak': 30,
    'Highest Win Streak': 98,
    'Normal Wins': 30,
    'Hard Wins': 14,
    'Impossible Wins': 4,
    'Round 1 Time : Normal': 140.7,
    'Round 2 Time : Normal': 197.3,
    'Round 3 Time : Normal': 348.9,
    'Round 4 Time : Normal': 460.2,
    'Round 5 Time : Normal': 549,
    'Round 1 Time : Hard': 158.6,
    'Round 2 Time : Hard': 226.4,
    'Round 3 Time : Hard': 362.7,
    'Round 4 Time : Hard': 501.4,
    'Round 5 Time : Hard': 590.4,
    'Round 1 Time : Impossible': 150.1,
    'Round 2 Time : Impossible': 244.4,
    'Round 3 Time : Impossible': 391.7,
    'Round 4 Time : Impossible': 507,
    'Round 5 Time : Impossible': 600.5,
    'Round 1 Time : Solo': 124.8,
    'Round 2 Time : Solo': 180.3,
    'Round 3 Time : Solo': 310.5,
    'Round 4 Time : Solo': 434.6,
    'Round 5 Time : Solo': 516.4,
    'Completed Challenges': '4/56',
  },
  {
    BattleTag: 'Casey#55667',
    Saves: 987,
    Deaths: 943,
    'Normal Games': 36,
    'Hard Games': 20,
    'Impossible Games': 7,
    'Highest Save Streak': 12,
    'Highest Win Streak': 115,
    'Normal Wins': 21,
    'Hard Wins': 15,
    'Impossible Wins': 5,
    'Round 1 Time : Normal': 140.1,
    'Round 2 Time : Normal': 204.6,
    'Round 3 Time : Normal': 359.4,
    'Round 4 Time : Normal': 480.9,
    'Round 5 Time : Normal': 545.8,
    'Round 1 Time : Hard': 151.5,
    'Round 2 Time : Hard': 217.5,
    'Round 3 Time : Hard': 378.2,
    'Round 4 Time : Hard': 496.4,
    'Round 5 Time : Hard': 587.2,
    'Round 1 Time : Impossible': 166.4,
    'Round 2 Time : Impossible': 236.7,
    'Round 3 Time : Impossible': 385.7,
    'Round 4 Time : Impossible': 501.7,
    'Round 5 Time : Impossible': 607.2,
    'Round 1 Time : Solo': 125.1,
    'Round 2 Time : Solo': 187.7,
    'Round 3 Time : Solo': 316.4,
    'Round 4 Time : Solo': 446.9,
    'Round 5 Time : Solo': 529.1,
    'Completed Challenges': '31/56',
  },
  {
    BattleTag: 'Jorge#12345',
    Saves: 987,
    Deaths: 724,
    'Normal Games': 39,
    'Hard Games': 13,
    'Impossible Games': 7,
    'Highest Save Streak': 25,
    'Highest Win Streak': 94,
    'Normal Wins': 20,
    'Hard Wins': 10,
    'Impossible Wins': 5,
    'Round 1 Time : Normal': 143.1,
    'Round 2 Time : Normal': 191.1,
    'Round 3 Time : Normal': 343.7,
    'Round 4 Time : Normal': 477.4,
    'Round 5 Time : Normal': 552.3,
    'Round 1 Time : Hard': 152.9,
    'Round 2 Time : Hard': 230,
    'Round 3 Time : Hard': 380.8,
    'Round 4 Time : Hard': 505.5,
    'Round 5 Time : Hard': 583,
    'Round 1 Time : Impossible': 165,
    'Round 2 Time : Impossible': 245,
    'Round 3 Time : Impossible': 388.7,
    'Round 4 Time : Impossible': 508.2,
    'Round 5 Time : Impossible': 601.4,
    'Round 1 Time : Solo': 115.4,
    'Round 2 Time : Solo': 186.1,
    'Round 3 Time : Solo': 302.4,
    'Round 4 Time : Solo': 448.5,
    'Round 5 Time : Solo': 528.8,
    'Completed Challenges': '48/56',
  },
  {
    BattleTag: 'Jesse#12345',
    Saves: 55,
    Deaths: 23,
    'Normal Games': 40,
    'Hard Games': 25,
    'Impossible Games': 9,
    'Highest Save Streak': 24,
    'Highest Win Streak': 88,
    'Normal Wins': 24,
    'Hard Wins': 11,
    'Impossible Wins': 3,
    'Round 1 Time : Normal': 130.6,
    'Round 2 Time : Normal': 193.7,
    'Round 3 Time : Normal': 341.1,
    'Round 4 Time : Normal': 463.5,
    'Round 5 Time : Normal': 555.9,
    'Round 1 Time : Hard': 154.6,
    'Round 2 Time : Hard': 224.2,
    'Round 3 Time : Hard': 371.5,
    'Round 4 Time : Hard': 492,
    'Round 5 Time : Hard': 579,
    'Round 1 Time : Impossible': 169.8,
    'Round 2 Time : Impossible': 246.2,
    'Round 3 Time : Impossible': 398.8,
    'Round 4 Time : Impossible': 508.7,
    'Round 5 Time : Impossible': 601.9,
    'Round 1 Time : Solo': 119.6,
    'Round 2 Time : Solo': 190.2,
    'Round 3 Time : Solo': 315.3,
    'Round 4 Time : Solo': 451,
    'Round 5 Time : Solo': 527.5,
    'Completed Challenges': '1/56',
  },
]
