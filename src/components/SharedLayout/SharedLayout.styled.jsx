import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  max-width: 1150px;
  margin: 12px auto;
  padding: 0 15px;

  border-bottom: 1px solid black;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
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
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #08528f;
  }
`;

export const Section = styled.section``;

export const Title = styled.h2`
  font-size: 600;
  font-weight: 400;
  color: blue;
`;
