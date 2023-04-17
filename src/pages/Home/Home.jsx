import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Div, LinkHome, List, Item, Icon } from './Home.styled.js';
import { Container } from 'components/Container.styled.js';
import { getTrendingMuvies } from 'service/movieApi.jsx';
import { RiMovie2Fill } from 'react-icons/ri';

const Home = () => {
  const [trendingMuvies, setTrendingMuvies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    try {
      getTrendingMuvies().then(r => setTrendingMuvies([...r.results]));
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
              <LinkHome to={`movies/${muvies.id}`} state={{ from: location }}>
                <Icon>
                  <RiMovie2Fill />
                </Icon>
                {muvies.title}
              </LinkHome>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default Home;
