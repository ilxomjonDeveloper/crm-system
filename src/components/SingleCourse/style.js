import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #fff;
  transition: all 0.2s ease;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  :hover {
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 15px rgba(0, 0, 0, 0.24);
  }
  .course-img {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
    }
    span {
      position: absolute;
      top: 10px;
      color: #fff;
    }
  }
  .course-info {
    padding: 20px;
    * {
      margin: 10px 0;
    }
  }
`;
