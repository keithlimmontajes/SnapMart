import { useEffect, useState } from "react";
import { Col, Row, Image, Button, Input } from "antd";

import { useStores } from "../../stores";
import { getList } from "../../stores/home/actions";
import { addCartItem } from "../../stores/cart/actions";
import { numberWithCustomFormatting } from "../../utils/number-format";

import "./style.scss";

const Content = () => {
  const { home } = useStores();

  const [data, setData] = useState<Array<any>>([]);
  const [sort, setSort] = useState(true);

  const fnSorting = () => {
    const item = [...home?.data];
    if (sort) {
      const ascendSortedList = item.sort(function (a, b) {
        return a?.unitPrice - b?.unitPrice;
      });

      setData(ascendSortedList);
    } else {
      const descendingSortedList = item.sort(function (a, b) {
        return b?.unitPrice - a?.unitPrice;
      });

      setData(descendingSortedList);
    }
  };

  const fnSearch = (value: string) => {
    const item = [...home?.data];
    const searchItems = item.filter((item) =>
      item?.productName.includes(value)
    );

    setData(searchItems);
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setData(home?.data);
  }, [home?.data]);

  return (
    <div className="content-list">
      <Row>
        <Col flex={1}>
          <Input.Search
            allowClear
            enterButton
            size="large"
            style={{ width: "60%", marginRight: 10 }}
            placeholder="Search product name here..."
            onSearch={(value) => fnSearch(value)}
          />
        </Col>
        <Button
          size="large"
          type="primary"
          onClick={() => {
            setSort(!sort);
            fnSorting();
          }}
        >
          ↑↓ Sort price
        </Button>
      </Row>

      {!data.length ? <h2> No results found..</h2> : null}

      {data.map((item) => {
        return (
          <div key={item?.id} className="content-card">
            <Row>
              <Col span={5}>
                <Image width={160} height={160} src={item?.imageUrl} />
              </Col>

              <Col span={14}>
                <span className="title">{item?.productName}</span>
                <br />
                <span className="category">{item?.category}</span>
                <br />
                <br />
                <span className="description">{item?.description}</span>
              </Col>

              <Col span={4} offset={1}>
                <span className="price">
                  ₱{numberWithCustomFormatting(item?.unitPrice)}
                </span>
                <br />
                <br />
                <br />
                <Button
                  size="large"
                  type="primary"
                  onClick={() => addCartItem(item)}
                >
                  Add to cart
                </Button>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
