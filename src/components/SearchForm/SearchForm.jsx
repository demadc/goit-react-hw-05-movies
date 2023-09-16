import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

import {
  SearchFormStyled,
  BtnSearch,
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
    <SearchFormStyled onChange={handleChange}>
      <BtnSearch type="submit" onSubmit={handleSubmit}>
        <FiSearch size="16px" />
      </BtnSearch>
    </SearchFormStyled>
  );
};
