import React from "react";
import "./Index.less";
import { List, InputItem, Toast } from "antd-mobile";
import { createForm } from "rc-form";
import axios from "axios";

const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);
let moneyKeyboardWrapProps: any;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: (e: Event) => e.preventDefault()
  };
}

export function Loginform(props: any) {
  const state = {
    type: "money"
  };
  function toast() {
    Toast.info(`i'm toast`);
  }
  console.log(props);
  const { getFieldProps } = props.form;
  const getRes = async () => {
    return await axios.get("http://api.hdafa.xyz:8888/search", {
      params: {
        keywords: "拥抱"
      }
    });
  };
  getRes().then(res => {
    console.log(res);
  });
  return (
    <List renderHeader={"登录"}>
      <InputItem
        {...getFieldProps("input1")}
        placeholder="请输入手机号码"
        clear
        moneyKeyboardAlign="left"
        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        onFocus={toast}
      >
        手机号码
      </InputItem>
      <InputItem
        {...getFieldProps("input1")}
        placeholder="请输入手机号码"
        clear
        moneyKeyboardAlign="left"
        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
      >
        手机号码
      </InputItem>
    </List>
  );
}

export default createForm()(Loginform);
