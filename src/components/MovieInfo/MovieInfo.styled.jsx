import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Poster = styled.img`
  width: 300px;
`;

export const MovieName = styled.h1`
  font-size: 50px;
  color: #1919c1;
`;

export const MovieReleaseDate = styled.p``;

export const MovieRating = styled.p``;

export const MovieOverview = styled.p`
  display: inline-block;
  letter-spacing: 0.06em;
  color: #484647;
`;

export const MovieGenres = styled.p`
  color: blue;
  font-size: 30px;
  font-weight: bold;
`;

export const GenresDesc = styled.div`
  display: flex;
  gap: 20px;
  color: #14e08b;
  font-weight: bold;
`;

export const GenresText = styled.p`
  font-size: 16px;
`;

export const Description = styled.div`
  padding-left: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Accent = styled.span`
  font-weight: bold;
`;

export const NavTab = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 1px solid #2185d6;
  margin-right: 10px;

  &.active {
    color: white;
    background-color: #1271be;
  }
`;

export const WrapperDesc = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const WrapperTitle = styled.h2`
  font-size: 20px;
  color: #9393e9;
`;
