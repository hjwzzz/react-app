import React, { useEffect, useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import './index.less'
import { playlist, PlaylistItem } from 'request/me'

const getPlayList = async (uid = 55584832) => {
  const getPlayListRes = await playlist({
    uid,
  })
  if (getPlayListRes.data.code === 200) {
    return getPlayListRes.data.playlist
  }
  return []
}

export default withRouter((props: RouteComponentProps) => {
  const [playList, setPlayList] = useState<PlaylistItem[]>([])
  useEffect(() => {
    getPlayList().then((playList) => {
      setPlayList(playList)
    })
  }, [])
  return (
    <div className="me">
      <div className="me-play-list">
        <div className="me-play-list-title">我喜欢的音乐</div>
        {playList.map((item) => {
          return (
            <div
              key={item.id}
              className="me-play-list-item"
              onClick={() =>
                props.history.push({
                  pathname: '../playList',
                  state: {
                    id: item.id,
                  },
                })
              }
            >
              <div className="me-play-list-item-content" style={{ backgroundImage: `url("${item.coverImgUrl}")` }}>
                {/* <div className="me-like-music-title">我喜欢的音乐</div> */}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
})
