import React from "react";
import { Container, Link } from "./style";
import { sidebar } from "../../utils/sidebar";

const Sidebar = () => {
  return (
    <Container>
      {sidebar.map(({ title, path, hidden, icon }, index) => {
        return (
          !hidden && (
            <Link
              key={index}
              to={path}
              className={`${({ isActive }) => isActive && "active"} sidebarBtn`}
            >
              {icon}
              <span>{title}</span>
            </Link>
          )
        );
      })}
    </Container>
  );
};

export default Sidebar;
