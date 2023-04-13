import { useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
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
      toast('Enter the name of the Movies 🎥 ', {
        style: {
          borderRadius: '20px',
          background: '#355f99',
          color: '#fff',
        },
      });
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
          placeholder="Search Cinema and Series"
          onChange={inputHandleChange}
        />
        <Toaster position="top-center" reverseOrder={false} />
      </Form>
    </Header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
