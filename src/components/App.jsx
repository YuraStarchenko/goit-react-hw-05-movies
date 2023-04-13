import { NavLink, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Container } from './Container.styled.js';
import Home from '../pages/Home/Home.jsx';
import Movies from '../pages/Movies/Movies.jsx';

export const App = () => {
  return (
    <Container>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <GlobalStyle />
    </Container>
  );
};
