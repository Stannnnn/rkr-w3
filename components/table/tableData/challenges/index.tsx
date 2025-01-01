import React from 'react'
import { Container } from './styled'
import { Flame } from '@/components/icons/flame'
import { Winner } from '@/components/icons/winner'
import { useTheme } from '@/hooks/useTheme'

interface Props {
  challenges: [number, number]
}

export default function Challenges({ challenges }: Props) {
  const [theme] = useTheme()
  const iconSize = 20
  const [completedChallenges, totalChallenges] = challenges

  if (totalChallenges === 0) {
    return <Container color={theme.text.primary}>none</Container>
  }

  if (completedChallenges === totalChallenges) {
    return (
      <Container color={theme.color.teal}>
        {completedChallenges}/{totalChallenges}
        <Winner height={iconSize} width={iconSize} fill={theme.color.teal} />
      </Container>
    )
  }

  if (completedChallenges >= totalChallenges * 0.75) {
    return (
      <Container color={theme.color.green}>
        {completedChallenges}/{totalChallenges}
        <Flame height={iconSize} width={iconSize} fill={theme.color.green} />
      </Container>
    )
  }

  if (completedChallenges >= totalChallenges * 0.5) {
    return (
      <Container color={theme.color.yellow}>
        {completedChallenges}/{totalChallenges}
      </Container>
    )
  }

  return (
    <Container color={theme.text.primary}>
      {completedChallenges}/{totalChallenges}
    </Container>
  )
}
