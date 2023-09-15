import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const Item = styled.li`
  min-width: 200px;
  width: 160px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 8px;
  border: 1px solid #663fd1;
  padding-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  text-align: center;

  &:nth-child(5n) {
    margin-right: 0;
  }

  & a {
    text-decoration: none;
    color: #117fda;
  }

  & p {
    font-weight: 800;
  }

  & img {
    width: 160px;
    height: 220px;
  }
`;
