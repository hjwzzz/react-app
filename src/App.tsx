import React, { useEffect } from 'react'
import 'App.less'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Layout from 'component/Layout'
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
      <Redirect path="/" to="/index/recommend"></Redirect>
      <Route path="/index" render={(props): JSX.Element => <Layout {...props} />}></Route>
    </Router>
  )
}

export default App
