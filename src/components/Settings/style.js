import styled from "styled-components";

export const Container = styled.div`
  padding: 120px 50px 50px 170px;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Modal = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 30;
  padding: 20px 0;
  overflow-y: scroll;
  transition: all .3s ease-in-out;
  box-shadow: 0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04);
  .modalTitle {
    padding: 0 25px;
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close-modal {
      border: none;
      background-color: transparent;
      font-size: 27px;
      color: #656565;
      font-weight: 600;
      cursor: pointer;
    }
  }
  .modalForm {
    padding: 25px;
    .formSection {
      margin-bottom: 15px;
    }
    .formSection * {
      margin-bottom: 8px;
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(2px);
  z-index: 12;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e9ec;
  margin: 20px 0;

`


