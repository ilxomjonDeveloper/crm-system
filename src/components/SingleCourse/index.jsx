import React from "react";
import { Container } from "./style";
import noImg from '../../assets/images/no-img.png'
const SingleCourse = () => {
  return <Container>
    <div className="course-img">
      <img src={noImg} alt="course img" />
      <span>Course Name</span>
    </div>
    <div className="course-info">
      <div className="subTitle">Course Name</div>
      <div className="info">Course Price</div>
    </div>
  </Container>;
};

export default SingleCourse;
