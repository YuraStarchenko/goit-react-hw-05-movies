import { useEffect } from 'react';
import { Div, List, Item } from './Home.styled.js';
import { Container } from 'components/Container.styled.js';

const Home = () => {
  useEffect(() => {}, []);
  return (
    <Container>
      <Div>Trending Today 🔝</Div>
      <List>
        <Item>
          <main>
            <h1>Welcome</h1>
            <img src="https://via.placeholder.com/960x240" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              laboriosam placeat incidunt rem illum animi nemo quibusdam quia
              voluptatum voluptate.
            </p>
          </main>
        </Item>
      </List>
    </Container>
  );
};

export default Home;
