import React from "react";
import { Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import Playstore from "../../assets/images/playstore.png";
import Logo2 from "../../assets/svg/brand-icon-small.svg";

const { Title } = Typography;

function Footer() {
  const isTooSmall = useMediaQuery({ query: "(max-width: 576px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div>
      <Col span={24}>
        <Row
          gutter={[0, 16]}
          style={{ padding: "15px", backgroundColor: "#011627"}}
        >
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <div style={{ fontSize: "24px", color: "white", fontWeight: 500 }}>
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

      <Col span={24} style={{marginTop: "-1px"}}>
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
                  pairing you with a completely different personality as that of
                  yours. We carry you to the most fantastic video talk with
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
    </div>
  );
}

export default Footer;
