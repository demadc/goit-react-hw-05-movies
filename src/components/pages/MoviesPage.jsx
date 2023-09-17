import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Section } from 'components/SearchForm/SearchForm.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchByQuery } from 'service/api';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const value = searchParams.get('query');
    if (!value) return;
    setIsLoading(true);
    fetchByQuery(value)
      .then(setMovies)
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const handleQuery = query => {
    setSearchParams(query);
  };

  return (
    <Section>
      <Container>
        <SearchForm handleQuery={handleQuery} />
      </Container>
    </Section>
  );
};
