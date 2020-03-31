import React, { useState } from "react";
import { TabBar } from "antd-mobile";
import Icon from "../icon/index";
import { RouteChildrenProps, useRouteMatch } from "react-router-dom";

type Props = RouteChildrenProps;

export default (props: Props) => {
  const [TabBarList] = useState([
    {
      name: "发现",
      icon: "icon-faxian",
      path: "/recommend"
    },
    {
      name: "我的",
      icon: "icon-wode",
      path: "/me"
    },
    {
      name: "账号",
      icon: "icon-zhanghaoguanli",
      path: "/account"
    }
  ]);
  let match = useRouteMatch();
  const [selectTabPath, setSelectTabPath] = useState(TabBarList[0].path);
  const selectTab = (path: string) => {
    setSelectTabPath(path);
    props.history.push(`${path}`);
  };
  return (
    <TabBar
      tintColor="#b3281e"
      unselectedTintColor="#ccc"
      barTintColor="#232323"
    >
      {TabBarList.map(item => (
        <TabBar.Item
          key={item.icon}
          icon={<Icon icon={item.icon}></Icon>}
          selectedIcon={<Icon icon={item.icon}></Icon>}
          title={item.name}
          selected={item.path === selectTabPath}
          onPress={() => {
            selectTab(item.path);
          }}
        ></TabBar.Item>
      ))}
    </TabBar>
  );
};
