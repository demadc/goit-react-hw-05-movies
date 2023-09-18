import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

import {
  BtnSearch,
  Input,
  SearchFormStyled,
} from 'components/SearchForm/SearchForm.styled';

export const SearchForm = ({ handleQuery }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;
    handleQuery(query);
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="20px" />
      </BtnSearch>
      <Input onChange={handleChange} value={query}></Input>
    </SearchFormStyled>
  );
};
