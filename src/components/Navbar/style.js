import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 30px;
  padding-right: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  position: fixed;
  box-shadow: 0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04);
  z-index: 10;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  a {
    width: 60px;
    height: 60px;
  }
  div {
    margin-left: 80px;
    span {
    overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`
export const Img = styled.img`
  width: ${({width}) => width? width : "60px"};
  height: ${({height}) => height? height : "60px"};
  border-radius: ${({borderRadius}) => borderRadius? borderRadius : "0"};
`

export const MenuWrapper = styled.div`
  background-color: #fff;
  margin-top: 10px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #e6e9ec;
  button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    transition: all .12s ease;
    :hover {
      background-color: #f18024;
      color: #fff;
    }
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  background: transparent;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e9ec;
`