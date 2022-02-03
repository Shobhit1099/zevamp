import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import AuthProvider from "./Context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// ReactDOM.render(
//   <AuthProvider>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </AuthProvider>,
//   document.getElementById("root")
// );
