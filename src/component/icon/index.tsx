import React from "react";
import "./index.less";

interface IconProp {
  className?: string;
  icon: string;
}

export default ({ className, icon }: IconProp) => {
  return <i className={`iconfont ${className} ${icon}`}></i>;
};
