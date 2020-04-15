import React, { useState, Fragment, useEffect, useReducer } from "react";
import Icon from "./../../component/icon";
import PlayStatusBtn from "./PlayStatusBtn/";
import "./index.less";
import { CSSTransition } from "react-transition-group";

interface ReducerState {
  progress: number;
}

function setProgress(state: ReducerState): ReducerState {
  return {
    progress: state.progress + 1,
  };
}

const Nav = (): JSX.Element => {
  const [searchPageStatus, SetSearchPageStatus] = useState(false);
  const [state, dispatch] = useReducer(setProgress, {
    progress: 0,
  });
  useEffect((): (() => void) => {
    const Interval = setInterval(() => {
      // dispatch();
    }, 1000);
    return (): void => clearInterval(Interval);
  }, []);
  return (
    <Fragment>
      <div className="nav">
        <div className="nav-left">
          <Icon icon="icon-microphone-alt"></Icon>
        </div>
        <div
          className="nav-content"
          onClick={(): void => SetSearchPageStatus(true)}
        ></div>
        <div
          className="nav-right"
          onClick={(): void => SetSearchPageStatus(false)}
        >
          <PlayStatusBtn progress={state.progress}></PlayStatusBtn>
        </div>
      </div>
      <CSSTransition
        in={searchPageStatus}
        unmountOnExit
        timeout={1000}
        classNames="search-page-animation"
      >
        <div className="search-page"></div>
      </CSSTransition>
    </Fragment>
  );
};

export default Nav;
