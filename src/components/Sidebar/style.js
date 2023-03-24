import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding-top: 70px;
  width: 120px;
  height: 100%;
  min-height: 645px;
  /* padding: 25px 0; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  position: fixed;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 15px rgba(0, 0, 0, 0.14);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #2c3036;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  svg {
    font-size: 30px;
    transition: all .2s ease;
    color: #424546;
  }
  span {
    transition: all .2s ease;
    margin-top: 5px;
  }
  :hover svg, :hover span {
    color: #f18024;
  }
  .active svg, .active div {
    color: #f18024;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: 424546;
`