import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Div, LinkHome, List, Item, Img } from './Home.styled.js';
import { Container } from 'components/Container.styled.js';
import { getTrendingMuvies } from 'service/movieApi.jsx';

const Home = () => {
  const [trendingMuvies, setTrendingMuvies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    try {
      getTrendingMuvies().then(r => setTrendingMuvies(r.results));
    } catch (error) {
      console.log(error);
    }
	}, []);

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return (
    <Container>
      <Div>Trending Today 🔝</Div>
      <List>
        {trendingMuvies.map(({ id, poster_path, title }) => {
          return (
            <Item key={id}>
              <LinkHome to={`movies/${id}`} state={{ from: location }}>
                <Img
                  src={`${viewPoster(poster_path)}`}
                  alt={title}
                  width="300"
                  height="400"
                />
                {title}
              </LinkHome>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default Home;
