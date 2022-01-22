import { PopupButton, Sidetab } from "@typeform/embed-react";

const Typeform = (props) => {
  return (
    <PopupButton
      id="IxhcTSuG"
      className="my-form basic-button"
      style={{
        width: "100%",
        fontSize: "16px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        borderRadius: "7px",
        border: "0px",
      }}
    >
      {props.message}
    </PopupButton>
  );
};

const Typeform2 = (props) => {
  return <Sidetab id="IxhcTSuG" buttonText="Signup here &#8594;" />;
};

export { Typeform2 };
export default Typeform;
