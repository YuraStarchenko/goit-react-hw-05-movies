import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  StyledLink,
  MovieInfo,
  MovieText,
  MenuList,
  MenuItem,
  ImgDetalis,
  TextDetalis,
  TitleDetalis,
  Information,
  Content,
  TitleInfotmation,
  LinkItems,
  SpanYear,
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
        <Content>
          <MovieInfo>
            <ImgDetalis src={source} alt="poster" width="300px" />
            <MovieText>
              <TitleDetalis>
                {filmInfo.title}

                {filmInfo.release_date && (
                  <SpanYear>
                    ({filmInfo.release_date.slice(0, 4)})
                  </SpanYear>
                )}
              </TitleDetalis>

              <TextDetalis>
                User score: {Math.round(filmInfo.vote_average * 10) + '%'}
              </TextDetalis>
              <TextDetalis>Overview</TextDetalis>
              <TextDetalis>{filmInfo.overview}</TextDetalis>
              <TextDetalis>Genres</TextDetalis>
              <TextDetalis>
                {filmInfo.genres.length > 0
                  ? filmInfo.genres.map(genre => genre.name).join(', ')
                  : 'No information about genres'}
              </TextDetalis>
            </MovieText>
          </MovieInfo>
          <Information>
            <TitleInfotmation>Additional information</TitleInfotmation>
            <MenuList>
              <MenuItem>
                <LinkItems to="cast">Cast</LinkItems>
              </MenuItem>
              <MenuItem>
                <LinkItems to="reviews">Reviews</LinkItems>
              </MenuItem>
            </MenuList>

            <Suspense>
              <Outlet />
            </Suspense>
          </Information>
        </Content>
      )}
    </Container>
  );
};

export default MovieDetails;
