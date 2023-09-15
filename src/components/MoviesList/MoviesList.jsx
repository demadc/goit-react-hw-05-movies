import { Item, List } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ list }) => {
  const location = useLocation();
  return (
    <List>
      {list.map(({ id, title, backdrop_path }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img src={backdrop_path} alt={title} />
          </Link>
        </Item>
      ))}
    </List>
  );
};

//'https://api.themoviedb.org/3'
