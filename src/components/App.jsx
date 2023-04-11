import { NavLink, y, Routes } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Container } from './Container.styled.js';

export const App = () => {
  return (
		<Container>
			<nav>HOME</nav>
      <GlobalStyle />
    </Container>
  );
};
