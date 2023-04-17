import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Container } from 'components/Container.styled';
import { getSearchMovies } from 'service/movieApi';
import logo from '../../img/not-found.png';
import { ImgMovies, ListMovies, ItemMovies, LinkMovies } from './Movies.styled';

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
        getSearchMovies(query).then(r => {
          setSearchResults([...r.results]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [query]);

  return (
    <Container>
      <SearchBar onSubmit={FormSubmit} />
      {searchResults.length === 0 && query !== '' && (
        <ImgMovies src={logo} alt="Logo" />
      )}
      <ListMovies>
        {searchResults.map(results => {
          return (
            <ItemMovies key={results.id}>
              <LinkMovies to={`${results.id}`} state={{ from: location }}>
                {results.title}
              </LinkMovies>
            </ItemMovies>
          );
        })}
      </ListMovies>
    </Container>
  );
};

export default Movies;
