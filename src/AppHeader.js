import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AppHeader = () => (
  <Header>
    <Navigation>
      <List>
        <ListItem>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/artist">Artist</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/photographer">Photographer</NavLink>
        </ListItem>
      </List>
    </Navigation>
  </Header>
);

const Header = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navigation = styled.nav`
  width: 80%;
`;

const List = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ListItem = styled.li`
  display: inline;
`;

export default AppHeader;
