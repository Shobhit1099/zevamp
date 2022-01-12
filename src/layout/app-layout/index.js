import { Layout, Menu, Typography, Card } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/brand-icon-new.svg";
import { HiOutlineViewGrid } from "react-icons/hi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiMessageCircle, FiSettings } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AppViews } from "../../views/app-views";

const { Sider } = Layout;
const { Content } = Layout;

export default function AppLayout(props) {
  return (
    <Layout>
      <Sider width="25%" style={{ backgroundColor: "#011627" }}>
        <div
          className="logo"
          style={{ paddingLeft: "10%", paddingTop: "80px" }}
        >
          <Link to={"/"}>
            <img src={Logo} width={250} height={60}></img>
          </Link>
        </div>
        <Menu
          theme="dark"
          style={{
            backgroundColor: "#011627",
            fontWeight: 500,
            position: "absolute",
            bottom: 200,
          }}
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<HiOutlineViewGrid size={20} />}>
            Home
            <Link to="/app/home"></Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AiOutlineYoutube size={20} />}>
            audio-box
            <Link to="/app/audio-box"></Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FiMessageCircle size={20} />}>
            Meeting Feedback
            <Link to="/app/meeting-feedback"></Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FiSettings size={20} />}>
            Settings
            <Link to="/app/settings"></Link>
          </Menu.Item>
        </Menu>
        <div
          className="text-muted"
          style={{
            margin: "0px 0px 0px 21%",
            position: "absolute",
            bottom: 50,
          }}
        >
          <div>Join now button will activate 10 minutes before the meet.</div>
          <div style={{ fontWeight: 700 }}>Contact us</div>
          <div style={{ marginTop: "20px" }}>
            <FaWhatsapp
              className="text-muted"
              size={20}
              style={{ marginRight: "10px" }}
            />
            <FaInstagram className="text-muted" size={20} />
            <div style={{ marginTop: "5px" }}>&copy; 2022 Zevamp</div>
          </div>
        </div>
      </Sider>
      <Layout style={{ backgroundColor: "#011627" }}>
        <Content
          style={{
            margin: "30px 20px 30px 20px",
            borderRadius: "48px",
            padding: "55px",
            paddingTop: "50px",
            paddingBottom: "33px",
          }}
        >
          <AppViews />
        </Content>
      </Layout>
    </Layout>
  );
}
