import { useState, useEffect } from 'react';

import { getTrendingMovies } from '../../service/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from '../Loader/Loader';
import {
  Section,
  Container,
  Title,
} from 'components/SharedLayout/SharedLayout.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(setMovies)
      .finally(() => setIsLoading(false));
  }, []);
  // console.log(movies);
  return (
    <Section>
      <Container>
        <Title>Trending today</Title>
        {!isLoading ? <MoviesList list={movies} /> : <Loader />}
      </Container>
    </Section>
  );
};

export default HomePage;
