import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../../components/footer";
import { LandingViews } from "../../views/landing-views";
import { Layout, Menu, Collapse } from "antd";
import { Link } from "react-router-dom";
import Logo2 from "../../assets/svg/brand-icon-nav-logo.svg";
import Logo1 from "../../assets/svg/brand-icon.svg";
import { useMediaQuery } from "react-responsive";
import { Sling as Hamburger } from "hamburger-react";

const { Header, Content } = Layout;
const { Panel } = Collapse;

export const LandingLayout = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const isTooSmall = useMediaQuery({ query: "(max-width: 576px)" });
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Layout className="layout">
        <Header
          style={
            isSmall
              ? { display: "none" }
              : {
                  display: "flex",
                  position: "absolute",
                  width: "100%",
                  zIndex: "10px",
                  marginX: "20px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  height: "90px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }
          }
        >
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo1} height={40} />
            </Link>
          </div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys="1">
            <Menu.Item key="1" className="landing-menu-item">
              Home
              <Link to=""></Link>
            </Menu.Item>
            <Menu.Item key="2" className="landing-menu-item">
              Roadmaps
              <a href="https://unlock-zevamp.carrd.co/"></a>
            </Menu.Item>
            <Menu.Item key="3" className="landing-menu-item">
              Contact
              <Link to=""></Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Collapse
          ghost
          expandIcon={() => {
            return <Hamburger rounded toggled={isOpen} toggle={setOpen} />;
          }}
          expandIconPosition="right"
          style={
            isSmall
              ? {
                  display: "block",
                  backgroundColor: "white",
                }
              : { display: "none" }
          }
        >
          <Panel
            header={
              <Header
                className="app-small-header"
                style={{
                  backgroundColor: "#ffffff",
                  marginBottom: "-10px",
                  height: "90px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="logo">
                  <Link to={"/"}>
                    {isTooSmall ? (
                      <img src={Logo2} height={70} width={70} />
                    ) : (
                      <img src={Logo1} height={40} />
                    )}
                  </Link>
                </div>
              </Header>
            }
            key="1"
          >
            <Menu
              theme="light"
              mode="horizontal"
              style={{ display: "flex", justifyContent: "center" }}
              defaultSelectedKeys="1"
            >
              <Menu.Item key="1" className="landing-menu-item">
                Home
                <Link to=""></Link>
              </Menu.Item>
              <Menu.Item key="2" className="landing-menu-item">
                Roadmaps
              <a href="https://unlock-zevamp.carrd.co/"></a>
              </Menu.Item>
              <Menu.Item key="3" className="landing-menu-item">
                Contact
                <Link to=""></Link>
              </Menu.Item>
            </Menu>
          </Panel>
        </Collapse>
        <Content
          style={
            isSmall
              ? {
                  marginTop: "-10px",
                  padding: "0px",
                  backgroundColor: "white",
                }
              : {
                  marginTop: "90px",
                  padding: "0px",
                  backgroundColor: "white",
                }
          }
        >
          <LandingViews />
        </Content>
        <Footer />
      </Layout>
      {/* <Switch>
        <Route path="/" component={LandingViews} />
      </Switch> */}
    </div>
  );
};

export default LandingLayout;
