import { Widget } from "@typeform/embed-react";
import { PopupButton } from "@typeform/embed-react";
import { Button } from "antd";

const TypeformDesktop = () => {
  return (
    <Widget
      disableAutoFocus="true"
      id="IxhcTSuG"
      height={600}
      width={1000}
      className="my-form"
    />
  );
};

const TypeformMobile = (props) => {
  return (
    <PopupButton
      id="IxhcTSuG"
      className="my-form basic-button"
      style={
        props.message === "Get Started"
          ? {
              fontSize: "16px",
              color: "white",
              padding: "0px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50px",
              width: "250px",
              borderRadius: "7px",
            }
          : {
              width: "100%",
              fontSize: "16px",
              color: "white",
              padding: "0px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50px",
              borderRadius: "7px",
            }
      }
    >
      {props.message}
    </PopupButton>
  );
};

export { TypeformMobile, TypeformDesktop };
