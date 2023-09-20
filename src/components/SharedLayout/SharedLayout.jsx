import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Nav, NavList, NavItem, NavLinkStyled } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
