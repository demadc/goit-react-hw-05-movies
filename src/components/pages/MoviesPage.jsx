import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Section } from 'components/SearchForm/SearchForm.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQuery = query => {
    setSearchParams(query);
  };

  const [movies, setMovies] = useState([]);
  //   useEffect(() => {
  //     getMovies().then(data => {
  //       //   console.log(data);
  //     });
  //   });
  return (
    <Section>
      <Container>
        <SearchForm handleQuery={handleQuery} />
      </Container>
    </Section>
  );
};
