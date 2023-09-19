import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'service/api';

import { CastList } from 'components/Cast/CastList';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  console.log(movieCast);

  useEffect(() => {
    if (!movieCast) return;
    fetchCredits(movieCast)
      .then(setMovieCast)
      .catch(error => console.log(error));
  }, [movieId, movieCast]);

  if (movieCast.length === 0) {
    return <p>No, cast about this movie.</p>;
  }

  return <CastList movieCast={movieCast} />;
};
