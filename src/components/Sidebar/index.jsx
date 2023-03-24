import React from "react";
import { Container, Line, Link } from "./style";
import { sidebar } from "../../utils/sidebar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <Container>
      {sidebar.map(({ title, path, hidden, icon }, index) => {
        return (
          !hidden && (
            <Link
              key={index}
              to={path}
              className={({ isActive }) => isActive && "active"}
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
