import React from 'react';
import { TextInput, Box, FormControl } from '@primer/react';

const SearchForm = ({ searchTerm, handleSearch, handleChange }) => {
  return (
    <Box
      mt={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <FormControl display="flex" alignItems="center" position="relative">
        <TextInput
          placeholder="Search Your Movie here"
          width="30vw"
          value={searchTerm}
          onChange={handleChange}
        />
        <svg
          onClick={handleSearch}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 40"
          width="10%"
          height="auto"
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '25%',
          }}
        >
          <path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></path>
        </svg>
      </FormControl>
    </Box>
  );
};

export default SearchForm;
