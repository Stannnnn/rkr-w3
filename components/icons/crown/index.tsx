import React from 'react'

interface IconProps {
  fill?: string
  width?: number
  height?: number
}

export const Crown = ({
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
        d="M23.074,3.842a1.5,1.5,0,0,0-1.635.325L17.728,7.879,13.061,3.212a1.5,1.5,0,0,0-2.122,0L6.272,7.879,2.561,4.167A1.5,1.5,0,0,0,0,5.228V16.5A5.507,5.507,0,0,0,5.5,22h13A5.507,5.507,0,0,0,24,16.5V5.228A1.5,1.5,0,0,0,23.074,3.842ZM21,16.5A2.5,2.5,0,0,1,18.5,19H5.5A2.5,2.5,0,0,1,3,16.5V8.849l2.212,2.212a1.5,1.5,0,0,0,2.121,0L12,6.394l4.667,4.667a1.5,1.5,0,0,0,2.121,0L21,8.849Z"
        fill={fill}
      />
    </svg>
  )
}
