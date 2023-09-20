import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Section } from 'components/SearchForm/SearchForm.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

import { fetchByQuery } from 'service/api';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuery = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    const value = searchParams.get('query');
    if (!value) return;
    setIsLoading(true);
    fetchByQuery(value)
      .then(response => {
        setMovies(response.results);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  return (
    <Section>
      <Container>
        <SearchForm handleQuery={handleQuery} />
        {isLoading ? <Loader /> : <MoviesList list={movies} />}
      </Container>
    </Section>
  );
};
export default MoviesPage;
