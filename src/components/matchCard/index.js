import { Card, Col, Row, Avatar } from "antd";
import Match1 from "../../assets/images/users/Match1.png";
import React from "react";
import { useMediaQuery } from "react-responsive";

function MatchCard(props) {
  const isBelow1085 = useMediaQuery({ query: "(max-width: 1085px)" });
  return (
    <Card
      hoverable
      className={props.matchCardClass}
      style={{ marginTop: "24px", width: "100%" }}
    >
      <Row align="middle" justify="space-between" gutter={[4, 16]}>
        <Col>
          <Avatar src={Match1} className="Avatar"></Avatar>
        </Col>
        {isBelow1085 && (
          <Col>
            <div style={{ color: "white" }}>
              <div style={{ fontWeight: 500, fontSize: "16px" }}>
                {props.name}
              </div>
              <span style={{ fontWeight: 500 }}>{props.rating} / 5 </span>
              <span>Platform Rating</span>
            </div>
          </Col>
        )}
        <Col
          lg={isBelow1085 && 24}
          style={{
            backgroundColor: "#FF5C00",
            borderRadius: "10px",
            color: "#FFF",
            fontWeight: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ padding: "5px 10px 5px 10px" }}>
            {props.day} | {props.date} | {props.time}
          </div>
        </Col>
      </Row>
      {!isBelow1085 && (
        <div style={{ marginTop: "10px", color: "white" }}>
          <div style={{ fontWeight: 500, fontSize: "16px" }}>{props.name}</div>
          <span style={{ fontWeight: 500 }}>{props.rating} / 5 </span>
          <span>Platform Rating</span>
        </div>
      )}
      <div
        style={{
          marginTop: "100px",
          backgroundColor: "#373532",
          borderRadius: "20px",
          fontSize: "18px",
          color: "white",
          padding: "15px",
        }}
      >
        {props.message}
      </div>
    </Card>
  );
}

export default MatchCard;
