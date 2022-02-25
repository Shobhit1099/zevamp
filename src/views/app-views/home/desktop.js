import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Layout, Modal, Row, Typography, Card } from "antd";
import MatchCard from "../../../components/matchCard";
import UserService from "../../../Services/UserServices";
import { AuthContext } from "../../../Context/AuthContext";

const { Content } = Layout;
const { Title } = Typography;

function DesktopHome() {
  const authContext = useContext(AuthContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [items, setItems] = useState();

  useEffect(() => {
    UserService.getUser().then((data) => setItems(data));
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      {console.log("COOKIE", document.cookie, "ITEMS", items)}
      <Title level={2}>
        Hey{" "}
        <span style={{ color: "#FF5C00" }}>
          {items && items.userDetails.Name}
        </span>{" "}
        - here are your upcoming Zevamp meets:
      </Title>
      <Row gutter={[40, 0]}>
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MatchCard
            name="Raghav Rao"
            day="Tuesday"
            date="3 Jan 2021"
            time="7:30 PM"
            rating="4.8"
            message={
              <span>
                Hey I am Raghav.
                <br /> Simplicity is the key to happiness.
              </span>
            }
            matchCardClass="ant-card-match1"
          />
          <Button
            type="primary"
            size="large"
            style={{
              marginTop: "20px",
              marginBottom: "5px",
              fontWeight: 700,
              fontSize: "18px",
              border: "1px solid #FFE8DB",
              borderRadius: "10px",
              height: "60px",
              minWidth: "175px",
              backgroundColor: "#FFE8DB",
              color: "#FF5C00",
            }}
          >
            Join Meet
          </Button>
          <a style={{ color: "#7D8186" }} onClick={showModal}>
            Skip Meeting?
          </a>
          <Modal
            bodyStyle={{
              backgroundColor: "#011627",
              display: "flex",
              alignItems: "center",
            }}
            visible={isModalVisible}
            onOk={handleOk}
            centered
            onCancel={handleCancel}
          >
            <Row gutter={[48, 24]} justify="center" align="middle">
              <Col span={18}>
                <Card
                  style={{
                    border: "0px",
                    backgroundColor: "#2c3a46",
                    color: "white",
                    borderRadius: "14px",
                  }}
                >
                  We are a small young team of 6 members. We request you to
                  attend your selected meets -- it hurts a lot!
                </Card>
              </Col>
              <Col span={9}>
                <Button
                  className="skip-meet-button"
                  block
                  size="large"
                  style={{
                    height: "50px",
                    border: "0px",
                    backgroundColor: "#152736",
                    color: "white",
                    fontWeight: 500,
                    borderRadius: "10px",
                  }}
                >
                  Still Skip
                </Button>
              </Col>
              <Col span={9}>
                <Button
                  className="join-meet-button"
                  block
                  size="large"
                  style={{
                    height: "50px",
                    border: "0px",
                    backgroundColor: "white",
                    color: "#FF5C00",
                    fontWeight: 500,
                    borderRadius: "10px",
                  }}
                >
                  Join Meet
                </Button>
              </Col>
            </Row>
          </Modal>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MatchCard
            name="Kirti Gaur"
            day="Friday"
            date="5 Jan 2021"
            time="7:30 PM"
            rating="4.6"
            message={
              <span>
                Kirti here,<br></br> Creating a life, I love ❤️.
              </span>
            }
            matchCardClass="ant-card-match2"
          />
          <Button
            disabled
            className="text-muted"
            type="primary"
            size="large"
            style={{
              marginTop: "20px",
              marginBottom: "5px",
              fontWeight: 600,
              fontSize: "18px",
              border: "1px solid #FFE8DB",
              borderRadius: "10px",
              height: "60px",
              minWidth: "175px",
              backgroundColor: "#FFE8DB",
              color: "#FF5C00",
            }}
          >
            1 day to go
          </Button>
          <a style={{ color: "#7D8186" }}>Skip Meeting?</a>
        </Col>
      </Row>
    </div>
  );
}

export default DesktopHome;
