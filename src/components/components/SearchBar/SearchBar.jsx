import { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Header, Form, Button, Input } from './SearchBar.styled.js';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const inputHandleChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  // Не дает засобмитить пустой инпут и пробелы
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
          placeholder="Search images and photos"
          onChange={inputHandleChange}
        />
      </Form>
    </Header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
