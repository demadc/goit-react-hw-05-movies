import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

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

  const location = useLocation();
  const backLink = location?.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    fetchById(movieId)
      .then(setMovie)
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  //   console.log(movie);

  return (
    <Section>
      <Link
        to={backLink}
        styled={{
          marginBottom: '60px',
          color: '#dfdbdb',
          letterSpacing: '0.06em',
          outlineBorder: 'black',
        }}
      >
        GoBack
      </Link>
      <Container>
        {isLoading && <Loader />}
        {movie && <MovieInfo movie={movie} />}
      </Container>
    </Section>
  );
};
