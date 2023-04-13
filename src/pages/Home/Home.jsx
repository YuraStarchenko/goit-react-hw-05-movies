import { useEffect } from 'react';
import { Div } from './Home.styled.js';
import { Container } from 'components/Container.styled.js';

const Home = () => {
  useEffect(() => {}, []);
  return (
    <Container>
      <Div>Trending Today 🔝</Div>
    </Container>
  );
};

export default Home;
