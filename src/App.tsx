import React, { useEffect } from "react";
import "App.less";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Layout from "component/Layout";
import { AxiosResponse } from "axios";
import request from "./request";

const loginByCellphone = async (): Promise<AxiosResponse<any>> => {
  return await request({
    url: "login/cellphone",
    params: {
      phone: 13726253246,
      password: "qq408763574",
    },
  });
};

function App(): JSX.Element {
  useEffect(() => {
    loginByCellphone().then((res) => {
      console.log(res);
    });
  });
  return (
    <Router>
      <Redirect path="/" to="/index/recommend"></Redirect>
      <Route
        path="/index"
        render={(props): JSX.Element => <Layout {...props} />}
      ></Route>
    </Router>
  );
}

export default App;
