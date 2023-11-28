import { Col, Row } from "antd";
import { useEffect } from "react";
import { useStores } from "../../stores";
import { DATA } from "../../stores/home/data";
import { getCategories, getFilteredList } from "../../stores/home/actions";
import "./style.scss";

const LeftBar = () => {
  const { home } = useStores();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="leftbar-cotainer">
      <div className="leftbar-category-div">
        <Row>
          <Col span={15}>
            <span
              className="leftbar-category-span"
              onClick={() => getFilteredList("")}
            >
              All Items
            </span>
          </Col>
          <Col span={2} style={{ marginTop: 10 }}>
            <span className="badge">{DATA.length}</span>
          </Col>
        </Row>
      </div>

      {home.categories.map((item, index) => {
        return (
          <div key={index} className="leftbar-category-div">
            <Row>
              <Col span={15}>
                <span
                  className="leftbar-category-span"
                  onClick={() => getFilteredList(item?.category)}
                >
                  {(item?.category || "").charAt(0).toUpperCase() +
                    item?.category.slice(1)}
                </span>
              </Col>
              <Col span={2} style={{ marginTop: 10 }}>
                <span className="badge">{item?.count}</span>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default LeftBar;
