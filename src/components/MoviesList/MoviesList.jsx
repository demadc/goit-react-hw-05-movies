import { Item, List } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ list }) => {
  const location = useLocation();
  return (
    <List>
      {list.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
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
