import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Container } from 'components/Container.styled';
import { getSearchMovies } from 'service/movieApi';
import logo from '../../img/not-found.png';
import {
  ImgMovies,
  ListMovies,
  ItemMovies,
  LinkMovies,
  Img,
} from './Movies.styled';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const location = useLocation();
  const query = searchQuery.get('query') ?? '';

  const FormSubmit = searchFrom => {
    setSearchQuery(searchFrom !== '' ? { query: searchFrom } : {});
  };

  useEffect(() => {
    if (query) {
      try {
        getSearchMovies(query).then(r => setSearchResults(r.results));
      } catch (error) {
        console.log(error);
      }
    }
  }, [query]);

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return (
    <Container>
      <SearchBar onSubmit={FormSubmit} />
      {searchResults.length === 0 && query !== '' && (
        <ImgMovies src={logo} alt="Logo" />
      )}
      <ListMovies>
        {searchResults.map(({ id, poster_path, title }) => {
          return (
            <ItemMovies key={id}>
              <LinkMovies to={`${id}`} state={{ from: location }}>
                <Img
                  src={`${viewPoster(poster_path)}`}
                  alt={title}
                  width="300"
                  height="450"
                />
              </LinkMovies>
            </ItemMovies>
          );
        })}
      </ListMovies>
    </Container>
  );
};

export default Movies;
