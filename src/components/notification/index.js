import React from "react";
import { notification, Button } from "antd";
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";

function Notification(props) {
  const { toggle } = createPopup("IxhcTSuG");
  const key = `open${Date.now()}`;
  const btn = (
    <Button
      type="primary"
      onClick={() => {
        notification.close(key);
        toggle();
      }}
    >
      {props.action}
    </Button>
  );
  const args = {
    message: <div style={{ fontSize: "18px" }}>{props.message}</div>,
    description: <div style={{ marginTop: "10px" }}>{props.description}</div>,
    duration: 3,
    btn,
    key,
  };
  if (props.type == "error") return notification.error(args);
  else return notification.success(args);
}

export default Notification;
