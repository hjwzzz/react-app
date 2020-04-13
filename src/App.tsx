import React from "react";
import "App.less";
// import routes from "routes";
// import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Layout from "component/Layout";
// import Recommend from "view/Index/Recommend";

function App() {
  return (
    <Router>
      <Redirect path="/" to="/index/recommend"></Redirect>
      <Route path="/index" render={props => <Layout {...props} />}></Route>
    </Router>
  );
}

export default App;
