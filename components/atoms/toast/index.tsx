'use client'

import { Cross } from '@/components/icons/cross'
import { useTheme } from '@/hooks/useTheme'
import { IToastVariant } from '@/interfaces/toast/index'
import { Container, Message, Wrapper } from './styled'

type Props = {
  index: number
  message: string
  onClick: () => void
  variant?: IToastVariant
}

export default function Toast({
  index,
  message,
  onClick,
  variant = 'error',
}: Props) {
  const [theme] = useTheme()

  return (
    <Wrapper index={index}>
      <Container onClick={onClick} variant={variant}>
        <Message>{message}</Message>
        <Cross height={16} fill={theme.text.white} width={16} />
      </Container>
    </Wrapper>
  )
}
