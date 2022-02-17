import React, { createContext, useState, useEffect } from "react";
import AuthService from "../Services/AuthServices";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const AuthContext = createContext();

export default ({ children }) => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 32, color: "#ff5c00" }} spin />
  );
  const [auth, setAuth] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    AuthService.isAuthenticated().then((data) => {
      setAuth(data.auth);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  }, []);
  return (
    <div style={isLoaded ? {} : { display: "flex", justifyContent: "center" }}>
      {!isLoaded ? (
        <Spin
          indicator={antIcon}
          style={{ position: "absolute", top: "45%" }}
          tip={
            <div style={{ color: "#ff5c00", marginTop: "10px", fontSize: 18 }}>
              Loading. Please Wait
            </div>
          }
        />
      ) : (
        <AuthContext.Provider
          value={{ auth, setAuth, isAuthenticated, setIsAuthenticated }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
