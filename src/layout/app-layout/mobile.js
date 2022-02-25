import { Layout, Menu } from "antd";
import { HiOutlineViewGrid } from "react-icons/hi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiMessageCircle, FiSettings } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { AppViews } from "../../views/app-views";

const { Header, Content, Footer } = Layout;

export default function MobileLayout(props) {
  const isBelow775 = useMediaQuery({ query: "(max-width: 775px)" });
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px", backgroundColor: "white" }}>
        <div className="site-layout-content"><AppViews/></div>
      </Content>
      {isBelow775 ? (
        <Header
          style={{
            position: "fixed",
            bottom: "0px",
            width: "100%",
            backgroundColor: "#0E2940",
          }}
        >
          <Menu
            className="app-menu-mobile"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            disabledOverflow="true"
            style={{
              backgroundColor: "#0E2940",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Menu.Item className="app-menu-item-mobile" key="1">
              <HiOutlineViewGrid size={35} />
              <Link to="/app/home"></Link>
            </Menu.Item>
            <Menu.Item className="app-menu-item-mobile" key="2">
              <AiOutlineYoutube size={35} />
              <Link to="/app/audio-box"></Link>
            </Menu.Item>
            <Menu.Item className="app-menu-item-mobile" key="3">
              <FiMessageCircle size={35} />
              <Link to="/app/meeting-feedback"></Link>
            </Menu.Item>
            <Menu.Item className="app-menu-item-mobile" key="4">
              <FiSettings size={35} />
              <Link to="/app/settings"></Link>
            </Menu.Item>
          </Menu>
        </Header>
      ) : (
        <Header
          style={{
            position: "fixed",
            bottom: "0px",
            width: "100%",
            backgroundColor: "#0E2940",
          }}
        >
          <Menu
            className="app-menu-tablet"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            disabledOverflow="true"
            style={{
              backgroundColor: "#0E2940",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Menu.Item
              className="app-menu-item-tablet"
              key="1"
              icon={<HiOutlineViewGrid size={30} />}
            >
              Home
              <Link to="/app/home"></Link>
            </Menu.Item>
            <Menu.Item
              className="app-menu-item-tablet"
              key="2"
              icon={<AiOutlineYoutube size={30} />}
            >
              Audio Box
              <Link to="/app/audio-box"></Link>
            </Menu.Item>
            <Menu.Item
              className="app-menu-item-tablet"
              key="3"
              icon={<FiMessageCircle size={30} />}
            >
              Meeting Feedback
              <Link to="/app/meeting-feedback"></Link>
            </Menu.Item>
            <Menu.Item
              className="app-menu-item-tablet"
              key="4"
              icon={<FiSettings size={30} />}
            >
              Settings
              <Link to="/app/settings"></Link>
            </Menu.Item>
          </Menu>
        </Header>
      )}
    </Layout>
  );
}
