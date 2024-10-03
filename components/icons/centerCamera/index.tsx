import React from 'react'

interface IconProps {
  fill?: string
  width?: number
  height?: number
}

export const CenterCamera = ({
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
        d="m17.238,1c-2.048,0-3.947.91-5.238,2.503-1.291-1.593-3.19-2.503-5.238-2.503C3.033,1,0,4.046,0,7.79c0,4.909,5.558,11.31,9.061,14.191.821.675,1.83,1.013,2.839,1.013,1.003,0,2.007-.333,2.827-1.001,3.728-3.033,9.273-9.318,9.273-14.203,0-3.744-3.033-6.79-6.762-6.79Zm-3.792,7.005c.514.061.882.647.802,1.526-.239,2.124-2.025,1.854-1.862-.222.081-.879.546-1.365,1.06-1.304Zm-2.905,0c.515-.061.98.425,1.061,1.304.164,2.074-1.622,2.347-1.861.222-.081-.878.284-1.464.8-1.526Zm-3.031,3.54c-.08-.878.288-1.464.802-1.526.514-.061.98.425,1.06,1.304.162,2.074-1.623,2.346-1.862.222Zm6.321,4.454c-.272-.012-.541-.059-.8-.139-.67-.211-1.397-.211-2.068,0-1.099.363-2.007.006-1.966-.978.002-1.455,1.487-2.883,3-2.883s2.998,1.428,2.998,2.883c0,.51-.202,1.117-1.166,1.117Zm.679-4.677c.081-.879.546-1.365,1.06-1.304s.882.647.801,1.526c-.239,2.124-2.025,1.854-1.862-.222Z"
        fill={fill}
      />
    </svg>
  )
}
