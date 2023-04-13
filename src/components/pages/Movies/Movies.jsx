import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Header, Form, Button, Input } from './Movies.styled.js';
import { BsSearch } from 'react-icons/bs';

const Movies = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // https://api.themoviedb.org/3/movie/550?api_key=fcfa30881c3e984af96d841d25a29426
  }, []);

  const inputHandleChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

    const handleSubmit = e => {
      e.preventDefault();
      if (inputValue.trim() === '') {
        Notify.info('Enter the name of the Movies 🎥 ');
        return;
      }
      onSubmit(inputValue);
      setInputValue('');
    };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <BsSearch />
        </Button>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          value={inputValue}
          placeholder="Search for Movies and Series"
          onChange={inputHandleChange}
        />
      </Form>
    </Header>
  );
};

export default Movies;

Movies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
