import React from "react";
import { Button, Container, Content, Img, Line, MenuWrapper } from "./style";
import noImg from "../../assets/images/no-img.png";
import { Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/students')
  }
  const menu = () => (
    <MenuWrapper>
      <Button onClick={onClick}>Hisob qaydnomasi</Button>
      <Line />
      <Button onClick={onClick}>Chiqish</Button>
    </MenuWrapper>
  );

  return (
    <Container>
      <Content>
        <Link to="/">
          <Img src={noImg} alt="Academy Img" />
        </Link>
        <div className="subTitle">
          <span>Academy Title</span>
        </div>
      </Content>
      <Content>
        <Dropdown dropdownRender={menu} placement="bottomRight" trigger="click">
          <Button>
            <div className="infoDesc">User name</div>
            <Img src={noImg} width="40px" height="40px" borderRadius="50%" />
          </Button>
        </Dropdown>
      </Content>
    </Container>
  );
};

export default Navbar;
