import { NavLink, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Container } from './Container.styled.js';
import Home from '../pages/Home/Home.jsx';
import Movies from '../pages/Movies/Movies.jsx';
import MovieDetails from '../pages/Movies/MovieDetails/MovieDetails';
import Cast from 'pages/Movies/MovieDetails/Cast/Cast.jsx';
import Reviews from 'pages/Movies/MovieDetails/Reviews/Reviews.jsx';

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

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
				</Route>
				
      </Routes>
      <GlobalStyle />
    </Container>
  );
};
