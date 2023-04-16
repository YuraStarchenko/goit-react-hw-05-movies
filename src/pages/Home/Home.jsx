import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Div, List, Item } from './Home.styled.js';
import { Container } from 'components/Container.styled.js';
import { getTrendingMuvies } from 'service/movieApi.jsx';

const Home = () => {
  const [trendingMuvies, setTrendingMuvies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    try {
      getTrendingMuvies().then(r =>
        setTrendingMuvies([...r.results])
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Div>Trending Today 🔝</Div>
      <List>
        {trendingMuvies.map(muvies => {
          return (
            <Item key={muvies.id}>
              <Link to={`movies/${muvies.id}`} state={{ from: location }}>
                {muvies.title}
              </Link>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default Home;
