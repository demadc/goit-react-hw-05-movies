import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  justify-content: start;
  max-width: 1150px;
  margin: 12px auto;
  padding: 0 15px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;

  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  &:first-child {
    margin-right: 10px;
    margin-bottom: 8px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;

  border-radius: 4px;
  text-decoration: none;
  color: #1b4bec;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #08528f;
  }
`;

export const Section = styled.section``;

export const Title = styled.h1`
  display: flex;
  justify-content: center;

  font-weight: 800;
  color: #1b4bec;
`;
