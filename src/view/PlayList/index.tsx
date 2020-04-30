import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { playlistDetail, PlaylistDetailParams, PlaylistDetailRes } from 'request/playlist'
import './index.less'

const getPlaylistDetail = async (id: number) => {
  const getPlaylistDetailRes = await playlistDetail({
    id,
  })
  if (getPlaylistDetailRes.data.code === 200) {
    return getPlaylistDetailRes.data.playlist.tracks
  }
  return []
}

const PlayList = (props: RouteComponentProps<{}, {}, PlaylistDetailParams>) => {
  const [privileges, setPrivileges] = useState<PlaylistDetailRes['playlist']['tracks']>([])
  useEffect(() => {
    getPlaylistDetail(props.location.state.id).then((res) => {
      setPrivileges(res)
      console.log(privileges)
    })
  }, [])
  return (
    <div className="play-list">
      {privileges.map((item, index) => {
        return (
          <div className="play-list-item" key={index}>
            <div className="play-list-item-desc">
              <span className="play-list-item-desc-index">{index + 1}</span>
              <div className="play-list-item-desc-content">
                <div className="play-list-item-desc-content-top">
                  <span className="play-list-item-desc-content-top-name">{item.name}</span>
                  {item.alia.length !== 0 && (
                    <span className="play-list-item-desc-content-top-alia">
                      (
                      {item.alia.reduce((prev, cur) => {
                        return prev + cur
                      }, '')}
                      )
                    </span>
                  )}
                </div>
                <div className="play-list-item-desc-content-bottom">
                  {item.ar.map((arItem, arKey) => {
                    return <span key={arKey}>{arItem.name}</span>
                  })}
                </div>
              </div>
            </div>
            <div className="play-list-item-handle"></div>
          </div>
        )
      })}
    </div>
  )
}
export default PlayList
