import React from "react";
import { Button, Col, Layout, Row, Typography } from "antd";
import MatchCard from "../../../components/matchCard";

const { Content } = Layout;
const { Title } = Typography;

function Home() {
  return (
    <div>
      <Title level={2}>
        Hey <span style={{ color: "#FF5C00" }}>Hardik</span> - here are your
        upcoming Zevamp meets:
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
          <a style={{ color: "#7D8186" }}>Skip Meeting?</a>
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

export default Home;
