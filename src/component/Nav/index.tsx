import React, { useState, Fragment } from "react";
import Icon from "./../../component/icon";
import "./index.less";
import { CSSTransition } from "react-transition-group";

const Nav = () => {
  const [searchPageStatus, SetSearchPageStatus] = useState(false);
  return (
    <Fragment>
      <div className="nav">
        <div className="nav-left">
          <Icon icon="icon-microphone-alt"></Icon>
        </div>
        <div
          className="nav-content"
          onClick={() => SetSearchPageStatus(true)}
        ></div>
        <div className="nav-right" onClick={() => SetSearchPageStatus(false)}>
          <div>播放</div>
        </div>
      </div>
      <CSSTransition
        in={searchPageStatus}
        unmountOnExit
        timeout={1000}
        classNames="alert"
      >
        <div className="search-page"></div>
      </CSSTransition>
    </Fragment>
  );
};

export default Nav;
