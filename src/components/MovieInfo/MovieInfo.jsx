import {
  Container,
  Description,
  Poster,
  Wrapper,
  MovieName,
  MovieReleaseDate,
  MovieRating,
  MovieOverview,
  MovieGenres,
  Accent,
} from 'components/MovieInfo/MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  if (!movie) {
    return null;
  }

  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;

  return (
    <>
      <Container>
        <Wrapper>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
          <Description>
            <MovieName>{title}</MovieName>
            <MovieReleaseDate>{release_date}</MovieReleaseDate>
            <MovieRating>
              {vote_average ? Math.round((vote_average * 100) / 10) : '...'}%
            </MovieRating>

            <MovieOverview>
              Overview: <Accent>{overview}</Accent>
            </MovieOverview>

            <MovieGenres>
              Genres: <Accent>{genres.join(', ')}</Accent>
            </MovieGenres>
          </Description>
        </Wrapper>
      </Container>
    </>
  );
};
