import React, { useState, Fragment, useEffect } from 'react'
import { TabBar } from 'antd-mobile'
import Icon from '../icon/index'
import { RouteComponentProps, Route } from 'react-router-dom'
import Recommend from 'view/Index/Recommend'
import Me from 'view/Index/Me'
import Account from 'view/Index/Account'
import './index.less'
import Nav from 'component/Nav'

type Props = RouteComponentProps<{
  name: string
}>

export default (props: Props) => {
  const [TabBarList] = useState([
    {
      name: '发现',
      icon: 'icon-faxian',
      path: 'recommend',
      component: Recommend,
    },
    {
      name: '我的',
      icon: 'icon-wode',
      path: 'me',
      component: Me,
    },
    {
      name: '账号',
      icon: 'icon-zhanghaoguanli',
      path: 'account',
      component: Account,
    },
  ])
  const [, setSelectTabPath] = useState(TabBarList[0].path)
  useEffect(() => {
    setSelectTabPath(props.match?.params.name)
  }, [props.match])
  const selectTab = (routePath: string) => {
    setSelectTabPath(routePath)
    props.history.push(`./${routePath}`)
  }
  return (
    <Fragment>
      <Nav />
      <TabBar tintColor="#b3281e" unselectedTintColor="#ccc" barTintColor="#232323">
        {TabBarList.map((item) => (
          <TabBar.Item
            key={item.icon}
            icon={<Icon icon={item.icon}></Icon>}
            selectedIcon={<Icon icon={item.icon}></Icon>}
            title={item.name}
            selected={item.path === props.match?.params.name}
            onPress={() => {
              selectTab(item.path)
            }}
          >
            <Route path={`/index/${item.path}`} component={item.component} />
          </TabBar.Item>
        ))}
      </TabBar>
    </Fragment>
  )
}
