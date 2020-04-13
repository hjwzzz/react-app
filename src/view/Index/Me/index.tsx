import React from "react";
import { withRouter } from "react-router-dom";
import { RouteConfig } from "react-router-config";

export default withRouter((props: RouteConfig) => {
  console.log(props.location);
  return <div>222</div>;
});
