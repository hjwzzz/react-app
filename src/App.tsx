import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import 'App.less'
import Layout from 'component/Layout'
import Player from 'view/Player'
import PlayList from 'view/PlayList'
import { subcount, loginByCellphone } from 'request/login'

const getSubcount = async (): Promise<void> => {
  const getSubcountRes = await subcount()
  if (getSubcountRes.data.code === 200) {
  }
}

const getUserInfo = async (): Promise<void> => {
  const loginByCellphoneRes = await loginByCellphone()
  if (loginByCellphoneRes.data.code === 200) {
    await getSubcount()
  }
}

function App(): JSX.Element {
  useEffect(() => {
    getUserInfo()
  }, [])
  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to="/index/recommend"></Redirect>
        <Route path="/index/:name" component={Layout}></Route>
        <Route path="/player" exact component={Player}></Route>
        <Route path="/playList" exact component={PlayList}></Route>
      </Switch>
    </Router>
  )
}

export default App
