import React, { useEffect, useState, Fragment } from 'react'
import request from './../../../request/index'
import './index.less'
import { AxiosResponse } from 'axios'

interface PlayListItem {
  name: string
  id: string
  coverImgUrl: string
}

interface GetListRes {
  playlists: PlayListItem[]
}

const getList = async (): Promise<AxiosResponse<GetListRes>> => {
  return await request({
    url: 'top/playlist',
    params: {
      limit: 5,
      order: 'hot',
    },
  })
}

const Recommend = (): JSX.Element => {
  const [discoverList, setDiscoverList] = useState<PlayListItem[]>([])
  useEffect(() => {
    getList().then((res) => {
      setDiscoverList(res.data.playlists)
    })
  }, [])
  return (
    <Fragment>
      <p className="discover-title">推荐歌单</p>
      <div className="discover-desc">
        <span>为您精挑细选</span>
        <div className="discover-desc-button">查看更多</div>
      </div>
      <div className="discover-list">
        {discoverList.map((item) => (
          <div className="discover-list-item" key={item.id}>
            <img className="discover-list-item-img" alt={item.name} src={item.coverImgUrl} />
            <p className="discover-list-item-name">{item.name}</p>
          </div>
        ))}
      </div>
    </Fragment>
  )
}
export default Recommend
