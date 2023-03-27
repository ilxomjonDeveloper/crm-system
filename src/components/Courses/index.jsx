import React, { useEffect, useState } from "react";
import SingleCourse from "../SingleCourse";
import { Container, Line, Modal, Overlay, SectionTitle } from "./style";

const Courses = () => {
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
        <div className="title">Kurslar</div>
        <button onClick={addNew} className="btn">
          Yangisini qo'shish
        </button>
      </SectionTitle>
      <Line />
      <SingleCourse />
      <Modal style={isOpen ? { right: "0px" } : { right: "-400px" }}>
        <div className="modalTitle">
          <div className="subTitle">Yangi element qo'shish</div>
          <button onClick={closeModal} className="close-modal">
            &times;
          </button>
        </div>
        <Line />
        <form className="modalForm" action="#" method="post">
          <div className="formSection">
            <div className="subTitle">Ism</div>
            <input type="text" placeholder="Course name" />
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
            <select name="course" id="course">
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="js">JavaScript</option>
            </select>
          </div>
          <div className="formSection">
            <div className="subTitle">Narx</div>
            <input type="number" placeholder="Course name" />
          </div>
          <div className="formSection">
            <div className="subTitle">Tavsif</div>
            <textarea name="tavsif" id="tavsif"></textarea>
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

export default Courses;
