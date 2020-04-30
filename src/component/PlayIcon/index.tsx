import React, { useEffect, useState } from 'react'
import './index.less'
interface PlayStatusBtnProp {
  progress: number
}

const PlayStatusBtn = (prop: PlayStatusBtnProp): JSX.Element => {
  const { progress } = prop
  const [circleProgress, setCircleProgress] = useState(progress)
  useEffect(() => {
    setCircleProgress((progress / 100) * Math.floor(2 * Math.PI * 20))
  }, [progress])

  return (
    <div className="play-status-btn">
      <svg width="100%" height="100%" viewBox="0 0 50 50">
        <pattern id="raduisImage" patternUnits="userSpaceOnUse" width="100%" height="100%" className="pattern">
          <image href="http://p1.music.126.net/YNaDS9XgzMSMoih6PtS7dQ==/109951164840055767.jpg" width="100%" height="100%" />
        </pattern>
        <circle stroke="#fff" cx="25" cy="25" r="20" strokeWidth="4" fill="url('#raduisImage')" />
        <circle
          transform-origin="center"
          strokeDasharray={`${circleProgress}, 100000000`}
          stroke="#db1ddb"
          cx="25"
          cy="25"
          r="20"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  )
}

export default PlayStatusBtn
