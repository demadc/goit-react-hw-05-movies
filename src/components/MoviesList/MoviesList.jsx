import { Item, List } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

import defaultPosterUrl from 'components/Image/placehold.it-500x750b.gif';

export const MoviesList = ({ list }) => {
  const location = useLocation();
  return (
    <List>
      {list.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                  : defaultPosterUrl
              }
              alt={title}
            />
            <p>{title}</p>
          </Link>
        </Item>
      ))}
    </List>
  );
};

//'https://api.themoviedb.org/3'
