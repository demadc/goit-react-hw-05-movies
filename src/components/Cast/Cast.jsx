import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'service/api';

import { CastList } from 'components/Cast/CastList';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  //   console.log(movieCast);

  useEffect(() => {
    fetchCredits(movieId)
      .then(response => {
        setMovieCast(response.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  if (movieCast.length === 0) {
    return <p>No, cast about this movie</p>;
  }

  return <CastList movieCast={movieCast} />;
};

export default Cast;
