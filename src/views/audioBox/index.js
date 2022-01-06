import React from "react";
import Logo1 from "../../assets/svg/brand-icon.svg";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import Arrow1 from "../../assets/svg/Arrow1.svg";
import Arrow2 from "../../assets/svg/Arrow2.svg";
import Vector1 from "../../assets/svg/Vector1.svg";
import Vector2 from "../../assets/svg/Vector2.svg";
import Audio1 from "../../assets/images/audio1.png";
import Audio2 from "../../assets/images/audio2.png";
import Audio3 from "../../assets/images/meet.png";
import { BsYoutube } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import Footer from "../../components/footer";

function AudioBox() {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  window.scrollTo(0, 0);
  return (
    <div>
      {!isSmall ? (
        <Row gutter={[0, 48]} justify="center" style={{ padding: "30px 30px" }}>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={"/"}>
              <img src={Logo1} />
            </Link>
            <div
              style={{
                color: "#888888",
                fontWeight: "700",
                fontSize: "40px",
              }}
            >
              &nbsp;/&nbsp;audio-box
            </div>
          </Col>
          <Col>
            <Row>
              <Col
                span={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Audio1} alt="Arrow" className="img-fluid" height={340} width={220} />
              </Col>
              <Col
                span={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Arrow1} alt="Arrow" className="img-fluid" />
              </Col>
              <Col
                span={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Audio2} alt="Arrow" className="img-fluid" height={130} width={260} />
              </Col>
              <Col
                span={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Arrow2} alt="Arrow" className="img-fluid" />
              </Col>
              <Col
                span={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Audio3} alt="Arrow" className="img-fluid" height={175} width={350} />
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col
                span={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#FFCEB2",
                    borderRadius: "50%",
                    height: "35px",
                    width: "35px",
                    fontWeight: 700,
                    color: "#404852",
                    fontSize: "20px",
                  }}
                  className="text-center"
                >
                  1
                </div>
              </Col>
              <Col
                span={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></Col>
              <Col
                span={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#FFCEB2",
                    borderRadius: "50%",
                    height: "35px",
                    width: "35px",
                    fontWeight: 700,
                    color: "#404852",
                    fontSize: "20px",
                  }}
                  className="text-center"
                >
                  2
                </div>
              </Col>
              <Col
                span={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></Col>
              <Col
                span={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#FFCEB2",
                    borderRadius: "50%",
                    height: "35px",
                    width: "35px",
                    fontWeight: 700,
                    color: "#404852",
                    fontSize: "20px",
                  }}
                  className="text-center"
                >
                  3
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col
                span={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  className={"text-center"}
                  style={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Explore our playlist and select your favourite session
                </div>
              </Col>
              <Col
                span={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></Col>
              <Col
                span={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  className={"text-center"}
                  style={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Loved listening our audio-box? Check description and connect
                  with new users!
                </div>
              </Col>
              <Col
                span={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></Col>
              <Col
                span={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  className={"text-center"}
                  style={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Attend an amazing Zevamp talk!
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Button
              block
              icon={
                <BsYoutube size={30} style={{ margin: "2px 10px 0px 0px" }} />
              }
              className="basic-button"
              size="large"
              type="primary"
              target="_blank"
              style={{
                padding: "0px 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50px",
                borderRadius: "7px",
                fontWeight: 600,
              }}
              href="https://www.youtube.com/channel/UCEdkricH6GpG6GJs98mJccQ/about"
            >
              Explore audio-box Now
            </Button>
          </Col>
        </Row>
      ) : (
        <Row gutter={[0, 48]} justify="center" style={{ padding: "30px 30px" }}>
          <Col
            span={24}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={"/home"}>
              <img src={Logo1} />
            </Link>
            <div
              style={{
                color: "#888888",
                fontWeight: "700",
                fontSize: "30px",
              }}
            >
              audio-box
            </div>
          </Col>
          <Col>
            <Row justify="center" gutter={[0, 12]}>
              <Col
                span={24}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Audio1}
                  alt="Arrow"
                  className="img-fluid"
                  height="200"
                  width="400"
                />
                <div
                  style={{
                    margin: "20px 0px 10px 0px",
                    backgroundColor: "#FFCEB2",
                    borderRadius: "50%",
                    height: "35px",
                    width: "35px",
                    fontWeight: 700,
                    color: "#404852",
                    fontSize: "20px",
                  }}
                  className="text-center"
                >
                  1
                </div>
                <div
                  className={"text-center"}
                  style={{ fontSize: "20px", fontWeight: 600 }}
                >
                  Explore our playlist and select your favourite session
                </div>
              </Col>
              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Vector1} alt="Arrow" className="img-fluid" />
              </Col>
              <Col
                span={24}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Audio2}
                  alt="Arrow"
                  className="img-fluid"
                  height="200"
                  width="400"
                />
                <div
                  style={{
                    margin: "20px 0px 10px 0px",
                    backgroundColor: "#FFCEB2",
                    borderRadius: "50%",
                    height: "35px",
                    width: "35px",
                    fontWeight: 700,
                    color: "#404852",
                    fontSize: "20px",
                  }}
                  className="text-center"
                >
                  2
                </div>
                <div
                  className={"text-center"}
                  style={{ fontSize: "20px", fontWeight: 600 }}
                >
                  Loved listening our audio-box? Check description and connect
                  with new users!
                </div>
              </Col>
              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Vector2} alt="Arrow" className="img-fluid" />
              </Col>
              <Col
                span={24}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={Audio3}
                  alt="Arrow"
                  className="img-fluid"
                  height="200"
                  width="400"
                />
                <div
                  style={{
                    margin: "20px 0px 10px 0px",
                    backgroundColor: "#FFCEB2",
                    borderRadius: "50%",
                    height: "35px",
                    width: "35px",
                    fontWeight: 700,
                    color: "#404852",
                    fontSize: "20px",
                  }}
                  className="text-center"
                >
                  3
                </div>
                <div
                  className={"text-center"}
                  style={{ fontSize: "20px", fontWeight: 600 }}
                >
                  Attend an amazing Zevamp talk!
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <Button
              block
              icon={
                <BsYoutube size={30} style={{ margin: "2px 10px 0px 0px" }} />
              }
              className="basic-button"
              size="large"
              type="primary"
              target="_blank"
              style={{
                padding: "0px 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50px",
                borderRadius: "7px",
                fontWeight: 600,
              }}
              href="https://www.youtube.com/channel/UCEdkricH6GpG6GJs98mJccQ/about"
            >
              Explore audio-box Now
            </Button>
          </Col>
        </Row>
      )}
      <Row gutter={[0, 48]} style={{ marginTop: "24px" }}>
        <Footer />
      </Row>
    </div>
  );
}

export default AudioBox;
