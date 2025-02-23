import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-bottom: 16px;
  width: 100%;
  font-size: var(--font-size-xs-sm);
  font-weight: var(--font-weight-regular);
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme.background.quaternary};
  border: 1px solid ${({ theme }) => theme.background.highlightTertiary};
  border-radius: 5px;
  padding: 8px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.primary};
  }
`

export const Option = styled.span<{ isClickable?: boolean }>`
  background-color: ${({ theme }) => theme.background.quaternary};
  display: block;
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'auto')};
  padding: 8px;
  width: 100%;
`

export const Options = styled.div`
  border: 1px solid ${({ theme }) => theme.background.highlightTertiary};
  border-radius: 5px;
  box-shadow: 0px 4px 6px ${({ theme }) => theme.shadow.primary};
  bottom: -40px;
  width: 100%;
  position: absolute;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
