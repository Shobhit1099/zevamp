import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import { AiFillStar } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const { Meta } = Card;

export default function Testimonial(props) {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Card hoverable style={{ maxWidth: 300, margin: "0 auto" }}>
      <Meta
        avatar={<Avatar size={40} src={props.image} />}
        title={
          <Row
          >
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
        description={
          <div style={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet nisl, enim justo viverra amet, orci feugiat.
          </div>
        }
      />
    </Card>
  );
}
