import React from "react";
import Logo1 from "../components/logo1";
import Logo2 from "../components/logo2";
import { Row, Col, Typography, Card, Button, Avatar, Rate } from "antd";
import meet from "../assets/images/meet.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import Typeform from "../components/typeform";
import { useMediaQuery } from "react-responsive";
import SwiperCard from "../components/swiper";
import "react-multi-carousel/lib/styles.css";
import Playstore from "../assets/images/playstore.png";
import Testimonial from "../components/testimonial";
import Roller from "../components/roller";
import user1 from "../assets/images/users/user1.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user3 from "../assets/images/users/user3.png";
import float1 from "../assets/images/users/float1.jpeg";
import float2 from "../assets/images/users/float2.jpg";
import float3 from "../assets/images/users/float3.jpeg";
import float4 from "../assets/images/users/float4.jpg";
import float5 from "../assets/images/users/float5.jpg";
import float6 from "../assets/images/users/float6.jpg";
import float7 from "../assets/images/users/float7.jpg";
import float8 from "../assets/images/users/float8.jpg";

const { Title } = Typography;

function Home() {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const isNotLarge = useMediaQuery({ query: "(max-width: 992px)" });
  const isTooSmall = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <div>
      <Row
        justify="center"
        gutter={[0, 48]}
        justify="center"
        style={{ padding: "30px 40px" }}
      >
        <Col
          span={24}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <a href="#">
            <Logo1 fill="#FF5C00" className={"logo1"} />
          </a>
          <div style={{ color: "#979797", fontWeight: 500 }}>
            Beta Version 2.0
          </div>
        </Col>

        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          span={24}
        >
          <Avatar
            className="floating"
            style={
              !isNotLarge
                ? {
                    position: "absolute",
                    left: "7vw",
                    boxShadow: "4px 5px 7px 2px rgba(0,0,0,0.2)",
                  }
                : { display: "none" }
            }
            size={45}
            src={float1}
          />
          <Title level={1} style={{ fontWeight: 700, margin: "0px" }} className="text-center">
            Connect, Learn &#38; Grow
          </Title>
          <Avatar
            className="floating"
            style={
              !isNotLarge
                ? {
                    position: "absolute",
                    right: "15vw",
                    top: "-25px",
                    boxShadow: "4px 5px 7px 2px rgba(0,0,0,0.2)",
                  }
                : { display: "none" }
            }
            size={45}
            src={float2}
          />
        </Col>

        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <Avatar
              className="floating"
              style={
                !isNotLarge
                  ? {
                      position: "absolute",
                      left: "15vw",
                      top: "50px",
                      boxShadow: "4px 5px 7px 2px rgba(0,0,0,0.2)",
                    }
                  : { display: "none" }
              }
              size={45}
              src={float3}
            />
            <Avatar
              className="floating"
              style={
                !isNotLarge
                  ? {
                      position: "absolute",
                      left: "12vw",
                      top: "225px",
                      boxShadow: "4px 5px 7px 2px rgba(0,0,0,0.2)",
                    }
                  : { display: "none" }
              }
              size={45}
              src={float4}
            />
          </div>
          <img className="img-fluid" src={meet} alt="google meet" />
          <div>
            <Avatar
              className="floating"
              style={
                !isNotLarge
                  ? {
                      position: "absolute",
                      right: "7vw",
                      top: "50px",
                      boxShadow: "4px 5px 7px 2px rgba(0,0,0,0.2)",
                    }
                  : { display: "none" }
              }
              size={45}
              src={float5}
            />
            <Avatar
              className="floating"
              style={
                !isNotLarge
                  ? {
                      position: "absolute",
                      right: "18vw",
                      top: "150px",
                      boxShadow: "4px 5px 7px 2px rgba(0,0,0,0.2)",
                    }
                  : { display: "none" }
              }
              size={45}
              src={float6}
            />
            <Avatar
              className="floating"
              style={
                !isNotLarge
                  ? {
                      position: "absolute",
                      right: "10vw",
                      top: "250px",
                      boxShadow: "4px 5px 7px 2px rgba(0,0,0,0.2)",
                    }
                  : { display: "none" }
              }
              size={45}
              src={float7}
            />
          </div>
        </Col>

        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            className="floating"
            style={
              !isNotLarge
                ? {
                    position: "absolute",
                    left: "18vw",
                    top: "75px",
                    boxShadow: "4px 5px 7px 2px rgba(0,0,0,0.2)",
                  }
                : { display: "none" }
            }
            size={45}
            src={float8}
          />
          <Card
            hoverable
            bodyStyle={isTooSmall ? { width: "auto" } : { width: "400px" }}
          >
            <Row align="middle" justify="center" gutter={[0, 24]}>
              <Col
                sm={16}
                xs={24}
                style={
                  isTooSmall && {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }
                }
              >
                <div style={{ fontSize: "14px", color: "#979797" }}>
                  Are you looking for
                </div>
                <div style={{ fontSize: "24px", fontWeight: 500 }}>
                  <Roller />
                </div>
              </Col>
              <Col
                sm={8}
                xs={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  block
                  className="basic-button"
                  size="large"
                  type="primary"
                  style={{
                    maxWidth: "190px",
                    padding: "0px 15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50px",
                    borderRadius: "7px",
                  }}
                  href="#form"
                >
                  Attend Now
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          span={24}
        >
          <Title level={2} style={{ fontWeight: 700, margin: "0px" }} className="text-center">
            Find out what our amazing users loved <br /> about Zevamp
          </Title>
        </Col>

        <Col span={24} style={isSmall && { display: "none" }}>
          <Row gutter={[48, 24]} justify="center">
            <Col>
              <Testimonial image={user3} name="Sachin Kaul" />
            </Col>
            <Col>
              <Testimonial image={user2} name="Shivakant" />
            </Col>
            <Col>
              <Testimonial image={user1} name="Shreya" />
            </Col>
          </Row>
        </Col>

        <Col
          span={24}
          style={isSmall ? { display: "block" } : { display: "none" }}
        >
          <SwiperCard />
        </Col>
      </Row>
      <Row gutter={[0, 48]}>
        <Col
          id="form"
          span={24}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Typeform />
        </Col>
        <Col span={24} style={isSmall && {marginBottom: "-48px"}}>
          <Row
            gutter={[0, 16]}
            style={{ padding: "15px", backgroundColor: "#011627" }}
          >
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
            >
              <div
                style={{ fontSize: "24px", color: "white", fontWeight: 500 }}
              >
                Follow Us
              </div>
            </Col>
            <Col
              span={24}
              style={
                !isTooSmall
                  ? {
                      display: "flex",
                      justifyContent: "center",
                      paddingRight: "125px",
                      paddingLeft: "125px",
                    }
                  : {
                      display: "flex",
                      justifyContent: "center",
                      paddingRight: "20px",
                      paddingLeft: "20px",
                    }
              }
            >
              <div
                style={{ fontSize: "16px", fontWeight: 100, color: "white" }}
                className="text-center"
              >
                Share your progress and join the conversation
              </div>
            </Col>
            <Col
              span={24}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "6px",
                marginBottom: "6px",
              }}
            >
              <Row gutter={[24, 0]} style={{marginBottom: "10px"}}>
                <Col>
                  <a
                    href="https://twitter.com/zevampofficial"
                    target="_blank"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      height: "35px",
                      width: "35px",
                      backgroundColor: "#FF5C00",
                    }}
                  >
                    <FiTwitter size={20} />
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.linkedin.com/company/zevamp/"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      height: "35px",
                      width: "35px",
                      backgroundColor: "#FF5C00",
                    }}
                  >
                    <FiLinkedin size={20} />
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.instagram.com/zevampofficial/"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      height: "35px",
                      width: "35px",
                      backgroundColor: "#FF5C00",
                    }}
                  >
                    <AiOutlineInstagram size={20} />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row justify="center" gutter={[0, 32]}>
            <Col md={12} sm={24} xs={24} style={{ backgroundColor: "#F6F6FB" }}>
              <div
                style={{
                  margin: "20px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "10px 0px",
                  }}
                >
                  <div
                    style={{
                      margin: "10px 0px",
                      display: "inline-block",
                      padding: "10px",
                      backgroundColor: "#FF5C00",
                      borderRadius: "50%",
                    }}
                  >
                    <Logo2 fill="#FFFFFF" />
                  </div>
                  <Title
                    level={2}
                    style={{
                      margin: "10px 0px",
                      fontWeight: 700,
                    }}
                  >
                    About Zevamp
                  </Title>
                  <div
                    className="text-center"
                    style={
                      isSmall
                        ? {
                            paddingRight: "40px",
                            paddingLeft: "40px",
                            fontSize: "15px",
                            margin: "10px 0px",
                          }
                        : {
                            paddingRight: "100px",
                            paddingLeft: "100px",
                            fontSize: "15px",
                            margin: "10px 0px",
                          }
                    }
                  >
                    Zevamp brings to you an entirely innovative experience by
                    pairing you with a completely different personality as that
                    of yours. We carry you the most fantastic video talk with
                    them, delivering an experience that can indeed advise your
                    better future.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <Row justify="center" align="bottom" style={{ height: "100%" }}>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    className="img-fluid"
                    src={Playstore}
                    height="100"
                    width="258"
                    alt="Google Playstore"
                  />
                  <div style={{ fontSize: "16px" }}>COMING SOON</div>
                </Col>
                <Col
                  span={24}
                  style={{
                    marginBottom: "30px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: 500,
                  }}
                >
                  teamzevamp@gmail.com
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
