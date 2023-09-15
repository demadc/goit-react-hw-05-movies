import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  Header,
  Nav,
  NavList,
  NavItem,
  NavLinkStyled,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavList>
            <NavItem>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </NavItem>
          </NavList>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};
