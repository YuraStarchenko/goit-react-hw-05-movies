import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Container } from './Container.styled.js';
import Home from '../pages/Home/Home.jsx';
import LayoutHeader from './Header/LayoutHeader.jsx';
import { Suspense, lazy } from 'react';

const MovieDetails = lazy(() =>
  import('../pages/Movies/MovieDetails/MovieDetails.jsx')
);
const Movies = lazy(() => import('../pages/Movies/Movies.jsx'));

const Reviews = lazy(() =>
  import('../pages/Movies/MovieDetails/Reviews/Reviews.jsx')
);
const Cast = lazy(() => import('../pages/Movies/MovieDetails/Cast/Cast.jsx'));

export const App = () => {
  return (
    <Container>
      <Suspense>
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
      </Suspense>
      <GlobalStyle />
    </Container>
  );
};
