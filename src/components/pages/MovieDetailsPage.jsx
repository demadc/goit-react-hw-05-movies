import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchById } from 'service/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  Section,
} from 'components/SharedLayout/SharedLayout.styled';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  //   console.log(movieId);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    fetchById(movieId)
      .then(setMovie)
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  console.log(movie);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {movie && <MovieInfo {...movie} />}
      </Container>
    </Section>
  );
};
