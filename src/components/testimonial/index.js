import { React, useState } from "react";
import { Row, Col, Card, Avatar, Rate, Skeleton } from "antd";
import { AiFillStar } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const { Meta } = Card;

export default function Testimonial(props) {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  // const [loading, setLoading] = useState(true);
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
      {props.loading ? (
        <Skeleton active avatar paragraph={{ rows: 4 }}></Skeleton>
      ) : (
        <Row gutter={[0, 12]} style={{ padding: "2px" }}>
          <Col span={24}>
            <Row justify="space-between">
              <Col
                span={6}
                style={{ display: "flex", justifyContent: "start" }}
              >
                <Avatar size={40} src={props.image}></Avatar>
              </Col>
              <Col span={18}>
                <div style={{ fontSize: "18px", fontWeight: 500 }}>
                  {props.name}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Rate
                    defaultValue={props.rate}
                    disabled
                    style={{ fontSize: "15px", color: "#FEC969" }}
                  />
                  <span style={{ marginLeft: "5px", fontSize: "16px" }}>
                    <b>{props.rate}.0</b>
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={24} style={{ color: "black" }}>
            {props.data}
          </Col>
        </Row>
      )}
    </Card>
  );
}
