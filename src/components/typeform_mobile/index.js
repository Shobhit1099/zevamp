import { PopupButton } from "@typeform/embed-react";

const TypeformM = (props) => {
  return (
    <PopupButton
      id="IxhcTSuG"
      className="my-form basic-button"
      style={{
        fontSize: "16px",
        color: "white",
        maxWidth: "190px",
        padding: "0px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        borderRadius: "7px",
      }}
    >
      {props.message}
    </PopupButton>
  );
};

export default TypeformM;
