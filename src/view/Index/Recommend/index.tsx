import React, { useEffect, useState, Fragment } from "react";
import request from "./../../../request/index";
import "./index.less";

interface DiscoverListItem {
  name: string;
  id: string;
  coverImgUrl: string;
}

const Recommend = () => {
  const [discoverList, setDiscoverList] = useState<DiscoverListItem[]>([]);
  useEffect(() => {
    const getList = async () => {
      return await request({
        url: "top/playlist",
        params: {
          limit: 5,
          order: "hot",
        },
      });
    };
    getList().then((res) => {
      setDiscoverList(res.data.playlists);
    });
  }, []);
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
            <img
              className="discover-list-item-img"
              alt={item.name}
              src={item.coverImgUrl}
            />
            <p className="discover-list-item-name">{item.name}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Recommend;
