import styled from 'styled-components';

export const Section = styled.section``;

export const SearchFormStyled = styled.form`
  width: 350px;
  margin-left: auto;
  margin-right: auto;

  position: relative;

  margin-bottom: ${props => props.theme.spacing.step * 20}px;
`;

export const BtnSearch = styled.button`
  width: 50px;
  height: 50px;

  font-size: 20px;
  font-weight: bold;
  color: #fff;

  position: absolute;
  top: 0;
  right: 0;
`;
