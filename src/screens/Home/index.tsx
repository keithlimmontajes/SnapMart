import Content from "../../components/Content";
import Leftbar from "../../components/Leftbar";
import RightBar from "../../components/Rightbar";
import { Col, Row } from "antd";
import "./style.scss";

const Home = () => {
  return (
    <Row className="main-row">
      <Col span={5}>
        <Leftbar />
      </Col>
      <Col span={14}>
        <Content />
      </Col>
      <Col span={5}>
        <RightBar />
      </Col>
    </Row>
  );
};

export default Home;
