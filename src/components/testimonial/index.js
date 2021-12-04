import React from "react";
import { Row, Col, Card, Avatar, Rate } from "antd";
import { AiFillStar } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const { Meta } = Card;

export default function Testimonial(props) {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Card
      hoverable
      style={{
        maxWidth: 300,
        minWidth: "250px",
        height: "100%",
        margin: "0 auto",
      }}
    >
      <Row gutter={[0,12]} style={{padding: "2px"}}>
        <Col span={24}>
          <Row justify="space-between">
            <Col span={6} style={{display: "flex",justifyContent: "start"}}>
              <Avatar size={40} src={props.image}></Avatar>
            </Col>
            <Col span={18}>
              <div style={{ fontSize: "18px", fontWeight: 500 }}>{props.name}</div>
              <div style={{display: "flex", alignItems: "center"}}> 
                <Rate defaultValue={props.rate} disabled style={{fontSize: "15px", color: "#FEC969" }} />
                <span style={{ marginLeft: "5px", fontSize: "16px" }}>
                  <b>{props.rate}.0</b>
                </span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{color: "black"}}>{props.data}</Col>
      </Row>
      {/* <Meta
        avatar={<Avatar size={40} src={props.image} />}
        title={
          <Row>
            <Col span={24}>
              <div style={{ fontSize: "18px" }}>{props.name}</div>
            </Col>
            <Col span={24} style={{ display: "flex", alignItems: "center" }}>
              <AiFillStar style={{ marginTop: "2px", color: "#FEC969" }} />
              <AiFillStar style={{ marginTop: "2px", color: "#FEC969" }} />
              <AiFillStar style={{ marginTop: "2px", color: "#FEC969" }} />
              <AiFillStar style={{ marginTop: "2px", color: "#FEC969" }} />
              <AiFillStar style={{ marginTop: "2px", color: "#FEC969" }} />
              <span style={{ marginLeft: "5px" }}>
                <b>5.0</b>
              </span>
            </Col>
          </Row>
        }
        description={<div style={{ color: "black" }}>{props.data}</div>}
      /> */}
    </Card>
  );
}
