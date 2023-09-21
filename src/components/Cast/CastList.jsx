import { CastResults, CastItem } from 'components/Cast/Cast.styled';
import defaultPosterUrl from 'components/Image/placehold.it-500x750b.gif';

export const CastList = ({ movieCast }) => {
  const results = movieCast.map(item => {
    const { id, profile_path, original_name, character } = item;

    return (
      <CastItem key={id}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w300${profile_path}`
              : defaultPosterUrl
          }
          alt={original_name}
        />
        <p>{original_name}</p>
        <p>{character}</p>
      </CastItem>
    );
  });

  return <CastResults>{results}</CastResults>;
};
