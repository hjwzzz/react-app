import React, { useState, Fragment } from "react";
import { TabBar } from "antd-mobile";
import Icon from "../icon/index";
import { RouteChildrenProps, useRouteMatch, Route } from "react-router-dom";
import Recommend from "view/Index/Recommend";
import Me from "view/Index/Me";
import Account from "view/Index/Account";
import "./index.less";
import Nav from "../Nav";

type Props = RouteChildrenProps;

export default (props: Props) => {
  const [TabBarList] = useState([
    {
      name: "发现",
      icon: "icon-faxian",
      path: "/recommend",
      component: Recommend,
    },
    {
      name: "我的",
      icon: "icon-wode",
      path: "/me",
      component: Me,
    },
    {
      name: "账号",
      icon: "icon-zhanghaoguanli",
      path: "/account",
      component: Account,
    },
  ]);
  let { path } = useRouteMatch();
  const [selectTabPath, setSelectTabPath] = useState(TabBarList[0].path);
  const selectTab = (routePath: string) => {
    setSelectTabPath(routePath);
    props.history.push(`${path}${routePath}`);
  };
  return (
    <Fragment>
      <Nav></Nav>
      <TabBar
        tintColor="#b3281e"
        unselectedTintColor="#ccc"
        barTintColor="#232323"
      >
        {TabBarList.map((item) => (
          <TabBar.Item
            key={item.icon}
            icon={<Icon icon={item.icon}></Icon>}
            selectedIcon={<Icon icon={item.icon}></Icon>}
            title={item.name}
            selected={item.path === selectTabPath}
            onPress={() => {
              selectTab(item.path);
            }}
          >
            <Route path={`${path}${item.path}`}>
              <item.component />
            </Route>
          </TabBar.Item>
        ))}
      </TabBar>
    </Fragment>
  );
};
