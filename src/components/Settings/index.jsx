import { DatePicker, Select, Space, TimePicker } from "antd";
import { Option } from "antd/es/mentions";
import React, { useEffect, useState } from "react";
import { Container, Line, Modal, Overlay, SectionTitle } from "./style";
import dayjs from "dayjs";
const format = "HH:mm a";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const addNew = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => {
    setIsOpen(!isOpen);
  };
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Container>
      <SectionTitle>
        <div className="title">Hodimlar</div>
        <button onClick={addNew} className="btn">
          Yangisini qo'shish
        </button>
      </SectionTitle>
      <Line />
      <Modal style={isOpen ? { right: "0px" } : { right: "-400px" }}>
        <div className="modalTitle">
          <div className="subTitle">Add New Staff</div>
          <button onClick={closeModal} className="close-modal">
            &times;
          </button>
        </div>
        <Line />
        <form className="modalForm" action="#" method="post">
          <div className="formSection">
            <div className="subTitle">Ism</div>
            <input type="text" placeholder="User name" />
          </div>
          <div className="formSection">
            <div className="subTitle">Telefon</div>
            <input type="tel" placeholder="Phone number" />
          </div>
          <div className="formSection">
            <div className="subTitle">Kurs Tanlash</div>
            <Select
              placeholder="Select option"
              style={{
                width: "100%",
              }}
            >
              <Option value="ceo">CEO</Option>
              <Option value="admin">Adminstrator</Option>
            </Select>
          </div>
          <div className="formSection">
            <div className="subTitle">O'qituvchini Tanlang</div>
            <div className="labels">
              <label htmlFor="male">
                <input id="male" type="radio" name="gender" />
                <span>Male</span>
              </label>
              <label htmlFor="female">
                <input id="female" type="radio" name="gender" />
                <span>Female</span>
              </label>
            </div>
          </div>
          <button type="submit" className="btn">
            Yuborish
          </button>
        </form>
      </Modal>
      <Overlay
        onClick={closeModal}
        style={isOpen ? { display: "block" } : { display: "none" }}
      />
    </Container>
  );
};

export default Settings;
