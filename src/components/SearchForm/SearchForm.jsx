import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

import {
  SearchFormStyled,
  BtnSearch,
  Input,
} from 'components/SearchForm/SearchForm.styled';

export const SearchForm = ({ handleQuery }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.targrt.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;
    handleQuery(query);
  };

  return (
    <SearchFormStyled>
      <BtnSearch onSubmit={handleSubmit} type="submit">
        <FiSearch size="20px" />
      </BtnSearch>
      <Input onChange={handleChange}></Input>
    </SearchFormStyled>
  );
};
