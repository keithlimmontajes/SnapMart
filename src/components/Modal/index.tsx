import { ModalTypes } from "./types";
import { Button, Modal } from "antd";
import { clearCartItem } from "../../stores/cart/actions";

import "./index.scss";

const ModalComponent = (props: ModalTypes) => {
  const { isModalOpen, setIsModalOpen } = props;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Thank you for purchasing!"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      maskClosable={false}
    >
      <Button
        style={{ width: "100%" }}
        type="primary"
        onClick={() => {
          clearCartItem();
          setIsModalOpen(false);
        }}
      >
        Complete
      </Button>
    </Modal>
  );
};

export default ModalComponent;
