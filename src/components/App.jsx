import { NavLink, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Container } from './Container.styled.js';
import Home from './pages/Home/Home.jsx';

export const App = () => {
  return (
    <Container>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<div>Movies🐷</div>} />
      </Routes>
      <GlobalStyle />
    </Container>
  );
};
