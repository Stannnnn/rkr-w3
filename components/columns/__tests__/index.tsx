import { screen } from '@testing-library/react'
import Columns from '..'
import { renderWithTheme } from '@/utils/renderWithTheme'

describe('Columns Component', () => {
  it('renders columns correctly', () => {
    const columns = [
      { description: 'Wins', value: 10 },
      { description: 'Losses', value: 5 },
    ]

    renderWithTheme(<Columns columns={columns} />)

    expect(screen.getByText('Wins')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('Losses')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('handles missing values (undefined) gracefully', () => {
    const columns = [{ description: 'Points' }]

    renderWithTheme(<Columns columns={columns} />)

    expect(screen.getByText('Points')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders correctly when columns array is empty', () => {
    renderWithTheme(<Columns columns={[]} />)

    expect(screen.queryByRole('column')).not.toBeInTheDocument()
  })
})
