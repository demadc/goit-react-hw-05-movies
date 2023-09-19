import { CastResults, CastItem } from 'components/Cast/Cast.styled';

export const CastList = ({ movieCast }) => {
  const results = movieCast.map(item => {
    const { id, profile_path, original_name, character } = item;

    return (
      <CastItem key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w300${profile_path}`}
          alt={original_name}
        />
        <p>{original_name}</p>
        <p>{character}</p>
      </CastItem>
    );
  });

  return <CastResults>{results}</CastResults>;
};
