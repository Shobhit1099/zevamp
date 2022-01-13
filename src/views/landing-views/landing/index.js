import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../../assets/svg/brand-icon.svg";
import { AiFillMail, AiFillLock } from "react-icons/ai";
import Footer from "../../../components/footer";
import {
  Row,
  Col,
  Typography,
  Card,
  Button,
  Avatar,
  Rate,
  Skeleton,
  Modal,
  Input,
} from "antd";
import meet from "../../../assets/images/meet.png";
import { TypeformMobile, TypeformDesktop } from "../../../components/typeform";
import Faq from "../../../components/faq";
import { useMediaQuery } from "react-responsive";
import SwiperCard from "../../../components/swiper";
import "react-multi-carousel/lib/styles.css";
import Testimonial from "../../../components/testimonial";
import Roller from "../../../components/roller";
import float1 from "../../../assets/images/users/float1.jpg";
import float2 from "../../../assets/images/users/float2.jpg";
import float3 from "../../../assets/images/users/float3.jpg";
import float4 from "../../../assets/images/users/float4.jpg";
import float5 from "../../../assets/images/users/float5.jpg";
import float6 from "../../../assets/images/users/float6.jpg";
import float7 from "../../../assets/images/users/float7.jpg";
import float8 from "../../../assets/images/users/float8.jpg";
import loginDummy1 from "../../../assets/images/loginDummy1.png";
import loginDummy2 from "../../../assets/images/loginDummy2.png";
import loginDummy3 from "../../../assets/images/loginDummy3.png";
import loginDummy4 from "../../../assets/images/loginDummy4.png";

const { Title } = Typography;

function Landing() {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const isNotLarge = useMediaQuery({ query: "(max-width: 992px)" });
  const isTooSmall = useMediaQuery({ query: "(max-width: 576px)" });
  const isBelow530 = useMediaQuery({ query: "(max-width: 530px)" });
  const isBelow450 = useMediaQuery({ query: "(max-width: 450px)" });
  const isBelow1050 = useMediaQuery({ query: "(max-width: 1050px)" });
  const [items, setItems] = useState();
  const [loading, setloading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    fetch("https://zevamp.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <Row gutter={[0, 40]} justify="center" style={{ padding: "30px 40px" }}>
        <Col
          span={24}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to={"/"}>
            <img src={Logo1} />
          </Link>
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
          <Title
            level={1}
            style={{ fontWeight: 700, margin: "0px" }}
            className="text-center"
          >
            Connect, Express &#38; Grow
          </Title>
          {!isTooSmall ? (
            <div
              className="text-muted text-center font-size-md"
              style={{ fontWeight: 500, marginLeft: "20px" }}
            >
              Brought about 25+ successful meetings in the last month🚀🔥
            </div>
          ) : (
            <div
              className="text-muted text-center font-size-md"
              style={{ fontWeight: 500 }}
            >
              Brought about 25+ successful meetings
              <br />
              in the last month🚀🔥
            </div>
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
            flexDirection: "column",
            alignItems: "center",
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
                    SignUp Now
                  </Button>
                ) : (
                  <TypeformMobile message="SignUp Now" />
                )}
              </Col>
            </Row>
          </Card>
          <div
            style={{ color: "#7D8186", marginTop: "10px", fontSize: "16px" }}
          >
            Click here to{" "}
            <a className="login-anchor" onClick={showModal}>
              login
            </a>
            <Modal
              visible={isModalVisible}
              onOk={handleOk}
              centered
              onCancel={handleCancel}
              width={1200}
            >
              <Row gutter={[24, 24]}>
                <Col
                  lg={14}
                  xs={24}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginRight: "20px" }}>
                    <img
                      className="img-fluid"
                      src={loginDummy1}
                      height={100}
                      width={100}
                    ></img>
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <img
                      className="img-fluid"
                      src={loginDummy2}
                      height={100}
                      width={100}
                    ></img>
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <img
                      className="img-fluid"
                      src={loginDummy3}
                      height={100}
                      width={100}
                    ></img>
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <img
                      className="img-fluid"
                      src={loginDummy4}
                      height={100}
                      width={100}
                    ></img>
                  </div>
                </Col>
                <Col
                  style={isNotLarge && {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  lg={10}
                  xs={24}
                >
                  <div style={{ fontSize: "20px", color: "#98989E" }}>Hey!</div>
                  <div style={{ fontSize: "24px", fontWeight: 700 }}>
                    Welcome back
                  </div>
                  <form style={{ marginTop: "20px" }}>
                    <div style={{ marginBottom: "20px" }}>
                      <div style={{ fontWeight: 500, marginBottom: "5px" }}>
                        E-Mail or Username
                      </div>
                      <Input
                        size="large"
                        placeholder="e.g.: elonmusk@mars.com "
                        prefix={
                          <AiFillMail
                            size={20}
                            style={{ marginTop: "3px" }}
                            className="text-muted"
                          />
                        }
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <div style={{ fontWeight: 500, marginBottom: "5px" }}>
                        Password
                      </div>
                      <Input
                        size="large"
                        placeholder="e.g.: X Æ A-12"
                        prefix={
                          <AiFillLock
                            size={20}
                            style={{ marginTop: "1px" }}
                            className="text-muted"
                          />
                        }
                      />
                    </div>
                    <Button
                      block
                      onClick={handleOk}
                      type="primary"
                      size="large"
                      style={{
                        maxWidth: "400px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        borderRadius: "25px",
                      }}
                    >
                      Login
                    </Button>
                    <div>
                      New User?{" "}
                      <a className="signup-anchor" style={{ fontWeight: 500 }}>
                        Signup here &#8594;
                      </a>
                    </div>
                  </form>
                </Col>
              </Row>
            </Modal>
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
            {items ? (
              items.testimonials.map((item) => {
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
              })
            ) : (
              <>
                <Col lg={8}>
                  <Testimonial loading={true} />
                </Col>
                <Col lg={8}>
                  <Testimonial loading={true} />
                </Col>
                <Col lg={8}>
                  <Testimonial loading={true} />
                </Col>
              </>
            )}
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

      <Row gutter={[0, 40]} style={{ marginTop: "12px" }}>
        <Col
          span={24}
          style={
            isBelow1050
              ? { display: "none" }
              : { display: "flex", justifyContent: "center" }
          }
        >
          <TypeformDesktop />
        </Col>

        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            hoverable
            bodyStyle={isTooSmall ? { width: "100%" } : { width: "400px" }}
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
                  Are you
                </div>
                <div style={{ fontSize: "24px", fontWeight: 500 }}>
                  still not sure?
                </div>
              </Col>

              <Col sm={8} xs={24}>
                <Link to={"/audio-box-demo"}>
                  <Button
                    block
                    size="large"
                    type="primary"
                    style={{
                      padding: "0px 15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "50px",
                      borderRadius: "7px",
                    }}
                  >
                    Let's try out!
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
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
            marginTop: "-10px",
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
          <TypeformMobile message="Get Started" />
        </Col>
        <Col>
          <Footer />
        </Col>
      </Row>
    </div>
  );
}

export default Landing;
