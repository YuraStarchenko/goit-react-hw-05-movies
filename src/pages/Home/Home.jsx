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

				</Item>
			</List>
    </Container>
  );
};

export default Home;
