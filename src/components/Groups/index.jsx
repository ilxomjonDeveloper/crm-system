import { DatePicker, Select, Space, TimePicker } from "antd";
import { Option } from "antd/es/mentions";
import React, { useEffect, useState } from "react";
import { Container, Line, Modal, Overlay, SectionTitle } from "./style";
import dayjs from "dayjs";
const format = "HH:mm a";

const Groups = () => {
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
        <div className="title">Guruhlar</div>
        <button onClick={addNew} className="btn">
          Yangisini qo'shish
        </button>
      </SectionTitle>
      <Line />
      <Modal style={isOpen ? { right: "0px" } : { right: "-400px" }}>
        <div className="modalTitle">
          <div className="subTitle">Yangi guruh qo'shish</div>
          <button onClick={closeModal} className="close-modal">
            &times;
          </button>
        </div>
        <Line />
        <form className="modalForm" action="#" method="post">
          <div className="formSection">
            <div className="subTitle">Nomi</div>
            <input type="text" placeholder="Group name" />
          </div>
          <div className="formSection">
            <div className="subTitle">Tur</div>
            <div className="labels">
              <label htmlFor="online">
                <input id="online" type="radio" name="courseType" />
                <span>Online</span>
              </label>
              <label htmlFor="offline">
                <input id="offline" type="radio" name="courseType" />
                <span>Offline</span>
              </label>
              <label htmlFor="videoCourse">
                <input id="videoCourse" type="radio" name="courseType" />
                <span>Video Course</span>
              </label>
            </div>
          </div>
          <div className="formSection">
            <div className="subTitle">Kurs Tanlash</div>
            <Select
              placeholder="Select option"
              style={{
                width: "100%",
              }}
            >
              <Option value="java">Java</Option>
              <Option value="python">Python</Option>
              <Option value="js">JavaScript</Option>
            </Select>
          </div>
          <div className="formSection">
            <div className="subTitle">O'qituvchini Tanlang</div>
            <Select
              placeholder="Select option"
              style={{
                width: "100%",
              }}
            >
              <Option value="sardor">Mr. Sardor</Option>
              <Option value="jonibek">Mr. Jonibek</Option>
              <Option value="zafar">Mr. Zafar</Option>
            </Select>
          </div>
          <div className="formSection">
            <div className="subTitle">Kunlar</div>
            <Select
              placeholder="Select option"
              style={{
                width: "100%",
              }}
            >
              <Option value="juft">Juft Kunlar</Option>
              <Option value="toq">Toq Kunlar</Option>
              <Option value="damolish">Dam olish kuni</Option>
              <Option value="harkuni">Har kuni</Option>
              <Option value="boshqa">Boshqa</Option>
            </Select>
          </div>
          <div className="formSection">
            <div className="subTitle">Honani tanlang</div>
            <Select
              placeholder="Select option"
              style={{
                width: "100%",
              }}
            >
              <Option value="yellow">Yellow Room</Option>
              <Option value="blue">Blue Room</Option>
              <Option value="red">Red Room</Option>
            </Select>
          </div>
          <div className="formSection">
            <div className="subTitle">Vaqtni tanlang</div>
            <TimePicker
              minuteStep={30}
              popupClassName="time-picker"
              defaultValue={dayjs("12:08", format)}
              format={format}
            />
          </div>
          <div className="formSection">
            <div className="subTitle">Guruh boshlanish sanasi</div>
            <DatePicker />
          </div>
          <div className="formSection">
            <div className="subTitle">Guruh tugash sanasi</div>
            <DatePicker />
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

export default Groups;
