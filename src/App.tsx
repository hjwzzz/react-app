import React, { useEffect } from "react";
import "App.less";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Layout from "component/Layout";
import { AxiosResponse } from "axios";
import request from "./request";

interface LoginByCellphoneRes {
  code: number;
}

interface SubcountRes {
  code: number;
  [key: string]: string | number;
}

const loginByCellphone = async (): Promise<
  AxiosResponse<LoginByCellphoneRes>
> => {
  return await request({
    url: "login/cellphone",
    params: {
      phone: 13726253246,
      password: "qq408763574",
    },
  });
};
const subcount = async (): Promise<AxiosResponse<SubcountRes>> => {
  return await request({
    url: "/user/subcount",
  });
};

const getSubcount = async (): Promise<void> => {
  const getSubcountRes = await subcount();
  if (getSubcountRes.data.code === 200) {
  }
};

const getUserInfo = async (): Promise<void> => {
  const loginByCellphoneRes = await loginByCellphone();
  if (loginByCellphoneRes.data.code === 200) {
    await getSubcount();
  }
};

function App(): JSX.Element {
  useEffect(() => {
    getUserInfo();
  }, []);
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
