import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Container } from 'components/Container.styled';
import { getSearchMovies } from 'service/movieApi';
import logo from '../../img/not-found.png';
import { Text, Img, Div } from './Movies.styled';

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
        <Img src={logo} alt="Logo" />
      )}

      {searchResults.length > 0 && (
        <Div>
          <Text>
            Search results <em>{query}</em>:
          </Text>
        </Div>
      )}
      <ul>
        {searchResults.map(results => {
          return (
            <li key={results.id}>
              <Link to={`${results.id}`} state={{ from: location }}>
                {results.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Movies;
