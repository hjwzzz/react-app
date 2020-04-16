import React, { useEffect, useState, Fragment } from 'react'
import { TopPlayListItem, getTopPlayListItem } from 'request/recommend'
import './index.less'
import { RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps

const Recommend = (props: Props): JSX.Element => {
  const [discoverList, setDiscoverList] = useState<TopPlayListItem[]>([])
  useEffect(() => {
    getTopPlayListItem().then((res) => {
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
          <div className="discover-list-item" onClick={() => props.history.push(`../playList?id=${item.id}`)} key={item.id}>
            <img className="discover-list-item-img" alt={item.name} src={item.coverImgUrl} />
            <p className="discover-list-item-name">{item.name}</p>
          </div>
        ))}
      </div>
    </Fragment>
  )
}
export default Recommend
