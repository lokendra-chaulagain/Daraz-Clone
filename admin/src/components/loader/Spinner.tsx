import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined
    style={{ fontSize: 24 }}
    spin
  />
);

export default function Spinner() {
  return <Spin indicator={antIcon} />;
}
