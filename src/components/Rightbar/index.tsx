/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Button, Row, Image, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import {
  clearCartItem,
  removeCartItem,
  updateCartList,
} from "../../stores/cart/actions";
import { useStores } from "../../stores";
import { DataTypes } from "../../stores/home/types";
import { numberWithCustomFormatting } from "../../utils/number-format";

import Modal from "../Modal";

import "./style.scss";

const Right = () => {
  const { cart } = useStores();

  const [data, setData] = useState<Array<any>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fnAddQty = (item: any, index: number) => {
    const items = [...cart?.data];
    items[index] = { ...item, qty: item.qty + 1 };

    updateCartList(items);
  };

  const fnSubQty = (item: any, index: number) => {
    const items = [...cart?.data];

    if (item?.qty <= 1) {
      removeCartItem(item?.id);
    } else {
      items[index] = { ...item, qty: item.qty - 1 };
      updateCartList(items);
    }
  };

  const fnTotalAmountQty = () => {
    let totalQty = 0;
    let totalAmount = 0;

    data.forEach((item) => {
      totalQty += item.qty;
      totalAmount += item.unitPrice * item.qty;
    });

    return {
      totalAmount: totalAmount,
      totalQty: totalQty,
    };
  };

  useEffect(() => {
    setData(cart?.data);
  }, [cart?.data]);

  return (
    <div className="rightbar">
      <h1>My Cart</h1>

      <div className="checkout-main-card">
        <Button
          style={{
            background: "red",
            fontWeight: 600,
            margin: "10px 0px",
          }}
          onClick={() => clearCartItem()}
        >
          CLEAR
        </Button>

        {!(data || []).length ? <h4>No item selected..</h4> : null}
        {(data || []).map((item: DataTypes, index: number) => {
          return (
            <div key={`${item?.id}_id_${index}`} className="checkout-card">
              <Row>
                <Image width={100} height={100} src={item?.imageUrl} />
                <div className="details">
                  <p className="checkout-text title">{item?.productName}</p>
                  <p className="checkout-text">
                    ₱{numberWithCustomFormatting(item?.unitPrice)}
                  </p>
                  <a
                    className="delete"
                    onClick={() => removeCartItem(item?.id)}
                  >
                    <DeleteOutlined />
                  </a>

                  <a onClick={() => fnSubQty(item, index)} className="minus">
                    -
                  </a>
                  <span className="quantity">{item?.qty || 0}</span>
                  <a onClick={() => fnAddQty(item, index)} className="add">
                    +
                  </a>
                </div>
              </Row>
            </div>
          );
        })}
      </div>

      <div className="footer">
        <p className="footer-1">
          <Row>
            <Col flex={1}>Total Items:</Col>
            <span>{fnTotalAmountQty().totalQty}</span>
          </Row>
        </p>
        <p className="footer-1">
          <Row>
            <Col flex={1}>Total Amount:</Col>
            <span>
              ₱{numberWithCustomFormatting(fnTotalAmountQty().totalAmount)}
            </span>
          </Row>
        </p>

        <Button
          disabled={!data?.length}
          onClick={() => setIsModalOpen(!isModalOpen)}
          style={{ width: "100%", background: "yellow" }}
        >
          <span style={{ color: "#000" }}>Checkout</span>
        </Button>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Right;
