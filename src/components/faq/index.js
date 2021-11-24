import React from "react";
import { Card, Row, Col, Collapse } from "antd";
import { RightOutlined } from "@ant-design/icons";
import img1 from "../../assets/images/Group_32.png";
import img2 from "../../assets/images/Group_5.png";
import { useMediaQuery } from "react-responsive";

const { Panel } = Collapse;

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna maecenas vestibulum mattis nibh tincidunt adipiscing bibendum.`;

function Faq() {
  const isBelow900 = useMediaQuery({ query: "(max-width: 900px)" });
  const isBelow768 = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Card
      hoverable
      style={{ border: "0px", background: "#F3F5F6", width: "1000px" }}
    >
      <Row gutter={[24, 24]}>
        <Col lg={6} md={isBelow900 ? 8 : 7} xs={24} style={{display: "flex", justifyContent: "center"}}>
          {isBelow768 ? (
            <img src={img2} className="img-fluid" style={{maxHeight: "150px"}} />
          ) : (
            <img src={img1} height="330" />
          )}
        </Col>
        <Col lg={18} md={isBelow900 ? 16 : 17} xs={24}>
          {" "}
          <Collapse
            style={{ background: "#F3F5F6" }}
            defaultActiveKey={1}
            accordion
            bordered={false}
            defaultActiveKey={["1"]}
            expandIconPosition="right"
            expandIcon={({ isActive }) => (
              <RightOutlined
                style={{ color: "#FF5C00" }}
                rotate={isActive ? 90 : 0}
              />
            )}
            className="site-collapse-custom-collapse"
          >
            <Panel
              header={<b>What is Zevamp</b>}
              key="1"
              className="site-collapse-custom-panel"
            >
              <p>{text}</p>
            </Panel>
            <Panel
              header={<b>Lorem ipsum ipsum lorem add here?</b>}
              key="2"
              className="site-collapse-custom-panel"
            >
              <p>{text}</p>
            </Panel>
            <Panel
              header={<b>Lorem ipsum ipsum lorem add here?</b>}
              key="3"
              className="site-collapse-custom-panel"
            >
              <p>{text}</p>
            </Panel>
            <Panel
              header={<b>Lorem ipsum ipsum lorem add here?</b>}
              key="4"
              className="site-collapse-custom-panel"
            >
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </Card>
  );
}

export default Faq;
