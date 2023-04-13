import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect } from 'react';

const Movies = () => {
  useEffect(() => {
    // https://api.themoviedb.org/3/movie/550?api_key=fcfa30881c3e984af96d841d25a29426
  }, []);
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default Movies;
