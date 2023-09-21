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
  GenresText,
  Accent,
  GenresDesc,
  WrapperDesc,
  NavTab,
  Link,
  WrapperTitle,
} from 'components/MovieInfo/MovieInfo.styled';
import { Outlet } from 'react-router-dom';

import defaultPosterUrl from 'components/Image/placehold.it-500x750b.gif';

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
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : defaultPosterUrl
            }
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

            <MovieGenres>Genres</MovieGenres>
            <GenresDesc>
              {genres &&
                genres.map(item => (
                  <GenresText key={item.id}>{item.name}</GenresText>
                ))}
            </GenresDesc>
          </Description>
        </Wrapper>
      </Container>

      <WrapperDesc>
        <WrapperTitle>Additional information</WrapperTitle>
        <NavTab>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </NavTab>
        <Outlet />
      </WrapperDesc>
    </>
  );
};
