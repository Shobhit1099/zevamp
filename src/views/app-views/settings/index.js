import React from "react";
import { Typography, Input } from "antd";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const { Title } = Typography;
const { TextArea } = Input;

function Settings() {
  return (
    <div>
      <Title level={3} style={{ textDecoration: "underline" }}>
        <a className="settings-anchor">Changed Preferred meet timings</a>
      </Title>
      <a
        style={{
          position: "absolute",
          right: 80,
          top: 80,
          fontSize: "24px",
          fontWeight: 700,
        }}
        className="settings-anchor"
      >
        Logout
      </a>
      <Title level={3} style={{marginTop: "30px", textDecoration: "underline" }}>
        <a className="settings-anchor">Email change request</a>
      </Title>
      <Title level={3} style={{ textDecoration: "underline" }}>
        <a className="settings-anchor">Password change request</a>
      </Title>
      <TextArea
        rows={8}
        placeholder="New product feature suggestions please..."
        style={{
          maxWidth: "800px",
          fontSize: "18px",
          padding: "20px",
          marginTop: "30px",
          borderRadius: "10px",
          border: "0px solid black",
          backgroundColor: "#fdece3",
          color: "#838383",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
        <Title level={2}>
          <a className="settings-anchor">Share Zevamp</a>
        </Title>
        <a className="settings-anchor">
          <FaWhatsapp
            size={30}
            style={{ marginBottom: "8px", marginLeft: "10px" }}
          />
        </a>
        <a className="settings-anchor">
          <FaInstagram
            size={30}
            style={{ marginBottom: "8px", marginLeft: "10px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Settings;
