import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'service/api';

import { ReviewsList } from 'components/Reviews/ReviewsList';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  console.log(movieReviews);

  useEffect(() => {
    fetchReviews(movieId)
      .then(response => {
        setMovieReviews(response.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  if (movieReviews.length === 0) {
    return <p>No, cast about this movie</p>;
  }

  return <ReviewsList movieReviews={movieReviews} />;
};

export default Reviews;
