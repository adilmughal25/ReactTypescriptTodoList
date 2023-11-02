import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavList>
        <NavItem>
          <NavLink to="/list-tasks">List Tasks</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/create-task">Create Task</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/bulk-delete">Bulk Delete</NavLink>
        </NavItem>
      </NavList>
    </NavbarWrapper>
  );
};

export default Navbar;
