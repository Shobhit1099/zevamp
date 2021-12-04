import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../assets/svg/brand-icon.svg";
import Logo2 from "../assets/svg/brand-icon-small.svg";
import { Row, Col, Typography, Card, Button, Avatar, Rate } from "antd";
import meet from "../assets/images/meet.png";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import TypeformD from "../components/typeform_desktop";
import TypeformM from "../components/typeform_mobile";
import Faq from "../components/faq";
import { useMediaQuery } from "react-responsive";
import SwiperCard from "../components/swiper";
import "react-multi-carousel/lib/styles.css";
import Playstore from "../assets/images/playstore.png";
import { BsInstagram } from "react-icons/bs";
import Testimonial from "../components/testimonial";
import Roller from "../components/roller";
import float1 from "../assets/images/users/float1.jpg";
import float2 from "../assets/images/users/float2.jpg";
import float3 from "../assets/images/users/float3.jpg";
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
  const isBelow530 = useMediaQuery({ query: "(max-width: 530px)" });
  const isBelow450 = useMediaQuery({ query: "(max-width: 450px)" });
  const isBelow1050 = useMediaQuery({ query: "(max-width: 1050px)" });
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("https://zevamp.herokuapp.com/home/")
      .then((res) => res.json())
      .then((data) => setItems(data));
  });

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
            <img src={Logo1} />
          </a>
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
          {isBelow530 ? (
            <Title
              level={1}
              style={{ fontWeight: 700, margin: "0px" }}
              className="text-center"
            >
              Connect, Express &#38; Grow
            </Title>
          ) : (
            <Title
              level={1}
              style={{ fontWeight: 700, margin: "0px" }}
              className="text-center"
            >
              Connect, Express &#38;
              <br /> Grow
            </Title>
          )}
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

          <img
            className="img-fluid"
            src={meet}
            alt="google meet"
            height="467"
            width="467"
          />

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
                {!isBelow1050 ? (
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
                ) : (
                  <TypeformM message="Attend Now" />
                )}
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
          <Title
            level={2}
            style={{ fontWeight: 700, margin: "0px" }}
            className="text-center"
          >
            Find out what our amazing users loved <br /> about Zevamp
          </Title>
        </Col>

        <Col
          span={24}
          style={isSmall ? { display: "none" } : { maxWidth: "1000px" }}
        >
          <Row gutter={[48, 24]} justify="center">
            {console.log(items)}
            {items && items.testimonials.map((item) => {
              return (
                <Col lg={8}>
                  <Testimonial
                    image={item.img}
                    name={item.uname}
                    data={item.review}
                    rate={item.rate}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>

      <Row
        style={
          isSmall
            ? { display: "block", margin: "18px 5px 52px 5px" }
            : { display: "none" }
        }
      >
        <Col span={24}>
          <SwiperCard />
        </Col>
      </Row>

      <div id="form"></div>

      <Row gutter={[0, 48]} style={{ marginTop: "24px" }}>
        <Col
          span={24}
          style={
            isBelow1050
              ? { display: "none" }
              : { display: "flex", justifyContent: "center" }
          }
        >
          <TypeformD />
        </Col>

        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "-24px",
          }}
        >
          {isBelow450 ? (
            <Title
              level={2}
              style={{ fontWeight: 700 }}
              className="text-center"
            >
              Your Zevamp meet
              <br />
              FAQs
            </Title>
          ) : (
            <Title
              level={2}
              style={{ fontWeight: 700 }}
              className="text-center"
            >
              Your Zevamp meet FAQs
            </Title>
          )}
        </Col>

        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0px 40px",
          }}
        >
          <Faq />
        </Col>
        <Col
          span={24}
          style={
            isBelow1050
              ? {
                  display: "flex",
                  padding: "0px 50px",
                  flexDirection: "column",
                  alignItems: "center",
                }
              : { display: "none" }
          }
        >
          <Title level={2} style={{ fontWeight: 700 }} className="text-center">
            Interested?
          </Title>
          <Title
            level={3}
            style={{ fontWeight: 700, marginTop: "5px", marginBottom: "30px" }}
            className="text-center"
          >
            Click on the button below to get started.
          </Title>
          <TypeformM message="Get Started" />
        </Col>
        <Col span={24} style={{ marginBottom: "-48px" }}>
          <Row
            gutter={[0, 16]}
            style={{ padding: "15px", backgroundColor: "#011627" }}
          >
            <Col
              span={24}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
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
              <Row gutter={[24, 0]} style={{ marginBottom: "10px" }}>
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
                    <BsInstagram size={20} />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row justify="center" gutter={[0, 32]}>
            <Col
              md={12}
              sm={24}
              xs={24}
              style={
                isSmall
                  ? { backgroundColor: "#F6F6FB" }
                  : {
                      backgroundColor: "#F6F6FB",
                      paddingBottom: "24px",
                      marginTop: "1px",
                    }
              }
            >
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
                    }}
                  >
                    <img src={Logo2} height="75" width="75" />
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
                    of yours. We carry you to the most fantastic video talk with
                    them, delivering an experience that can indeed advise your
                    better future.
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} style={{ paddingBottom: "24px" }}>
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
                  style={
                    isSmall
                      ? {
                          marginTop: "30px",
                          marginBottom: "15px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          fontSize: "17px",
                          fontWeight: 500,
                        }
                      : {
                          marginBottom: "30px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          fontSize: "18px",
                          fontWeight: 500,
                        }
                  }
                >
                  team@zevamp.com
                  <br />
                  <div className="text-muted font-size-md">
                    &copy; 2021 Zevamp
                  </div>
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
