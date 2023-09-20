import { ReviewsItem, ReviewsResults } from 'components/Reviews/Reviews.styled';

export const ReviewsList = ({ movieReviews }) => {
  const results = movieReviews.map(({ id, author, content }) => {
    return (
      <ReviewsItem key={id}>
        <h4>author: {author}</h4>
        <p>{content}</p>
      </ReviewsItem>
    );
  });

  return <ReviewsResults>{results}</ReviewsResults>;
};
