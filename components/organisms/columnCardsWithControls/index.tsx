'use client'

import { BestTime } from '@/interfaces/player'
import { BadgesContainer } from './styled'
import { useState, useEffect } from 'react'
import { Difficulty } from '@/interfaces/difficulty'
import { difficultyNames } from '@/constants'
import { PageContainer } from '@/components/atoms/pageContainer'
import Badges from '@/components/molecules/badges'
import ColumnCards from '@/components/molecules/columnCards'
import { useToast } from '@/hooks/useToast'

interface Data {
  player: string
  data: number | BestTime
}

type LeaderBoardData = { category: string; data: Data[]; key: string }[]

interface Props {
  data?: LeaderBoardData
  title: string
  viewAllKey: 'overview' | 'time'
}

export default function ColumnCardsWithControls({
  data,
  viewAllKey,
  title,
}: Props) {
  const [difficultyFilter, setDifficultyFilter] = useState<
    Difficulty | undefined
  >()
  const [filteredData, setFilteredData] = useState<
    LeaderBoardData | undefined
  >()
  const [loading, setLoading] = useState(false)
  const { showToast } = useToast()

  useEffect(() => {
    const fetchFilteredData = async () => {
      if (difficultyFilter === undefined) {
        setFilteredData(data)
        return
      }

      setLoading(true)

      // TODO: create helper or what about react query?
      try {
        const response = await fetch(
          `/api/timeLeaderboard?difficulty=${difficultyFilter}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const result = await response.json()
        setFilteredData(result)
      } catch (error) {
        showToast(
          `Couldn't fetch the times leaderboard for the ${difficultyFilter} difficulty, please try again later.`,
        )
      } finally {
        setLoading(false)
      }
    }

    fetchFilteredData()
  }, [difficultyFilter, data, showToast])

  const onFilterClick = (difficulty: Difficulty | undefined) => {
    setDifficultyFilter(difficulty)
  }

  return (
    <PageContainer
      ariaLabelledby="columns-time-title"
      marginTop={32}
      title={title}
    >
      <BadgesContainer>
        <Badges
          onClick={onFilterClick}
          options={difficultyNames}
          selected={difficultyFilter}
        />
      </BadgesContainer>
      <ColumnCards
        data={difficultyFilter === undefined ? data : filteredData}
        hoverable={difficultyFilter === undefined}
        loading={loading}
        viewAllKey={viewAllKey}
      />
    </PageContainer>
  )
}
