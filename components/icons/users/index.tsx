import React from 'react'

interface IconProps {
  fill?: string
  width?: number
  height?: number
}

export const Users = ({
  fill = '#000',
  width = 100,
  height = 100,
}: IconProps) => {
  return (
    <svg
      fill="none"
      height={height}
      role="img"
      viewBox="0 0 24 24"
      width={width}
    >
      <path
        d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm7.5 7a5.006 5.006 0 0 0 -5-5h-5a5.006 5.006 0 0 0 -5 5v4h15zm2.5-11a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm1.5 2h-5a4.793 4.793 0 0 0 -.524.053 6.514 6.514 0 0 1 -1.576 2.216 7.008 7.008 0 0 1 5.1 6.731h7v-4a5.006 5.006 0 0 0 -5-5z"
        fill={fill}
      />
    </svg>
  )
}
