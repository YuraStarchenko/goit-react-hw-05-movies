import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  StyledLink,
  MovieInfo,
  MovieText,
  MenuList,
  MenuItem,
} from './MovieDetails.styled.js';
import { HiArrowLeft } from 'react-icons/hi';
import { isEmpty } from 'lodash';
import { Container } from 'components/Container.styled.js';
import { useEffect, useState, Suspense } from 'react';
import { getDetailsMovie } from 'service/movieApi.jsx';
import { useRef } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState({});

  const location = useLocation();
  const goBack = useRef(location.state?.from || '/');

  useEffect(() => {
    try {
      getDetailsMovie(movieId).then(res => setFilmInfo(res));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  let source = '';
  if (!filmInfo.poster_path) {
    source =
      'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  } else source = `https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`;

  return (
    <Container>
      <StyledLink to={goBack.current}>
        <HiArrowLeft size="15" />
        Go to Back
      </StyledLink>

      {!isEmpty(filmInfo) && (
        <>
          <MovieInfo>
            <img src={source} alt="poster" width="300px" />
            <MovieText>
              <h1>
                {filmInfo.title}

                {filmInfo.release_date && (
                  <span
                    style={{
                      padding: '0px 10px',
                      color: '#a01d1d',
                    }}
                  >
                    ({filmInfo.release_date.slice(0, 4)})
                  </span>
                )}
              </h1>

              <p>User score: {Math.round(filmInfo.vote_average * 10) + '%'}</p>
              <b>Overview</b>
              <p>{filmInfo.overview}</p>
              <b>Genres</b>
              <p>
                {filmInfo.genres.length > 0
                  ? filmInfo.genres.map(genre => genre.name).join(', ')
                  : 'No information about genres'}
              </p>
            </MovieText>
          </MovieInfo>
          <div>
            <h2>Additional information</h2>
            <MenuList>
              <MenuItem>
                <Link to="cast">Cast</Link>
              </MenuItem>
              <MenuItem>
                <Link to="reviews">Reviews</Link>
              </MenuItem>
            </MenuList>

            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
