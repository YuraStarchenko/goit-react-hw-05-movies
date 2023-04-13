import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Container } from './Container.styled.js';
import Home from '../pages/Home/Home.jsx';
import Movies from '../pages/Movies/Movies.jsx';
import MovieDetails from '../pages/Movies/MovieDetails/MovieDetails';
import Cast from 'pages/Movies/MovieDetails/Cast/Cast.jsx';
import Reviews from 'pages/Movies/MovieDetails/Reviews/Reviews.jsx';
import LayoutHeader from './Header/LayoutHeader.jsx';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<LayoutHeader />}>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </Container>
  );
};
