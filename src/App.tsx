import React from "react";
import "@/App.less";
import Login from "./view/Login/Index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Login></Login>
    </Router>
  );
}

export default App;
