/* eslint-disable react/prop-types */
import React from 'react';

const SearchBar = ({ onHandleSearchName, name }) => {
  return (
    <form className='input-group mb-3'>
      <input
        onChange={onHandleSearchName}
        value={name}
        className='form-control'
        placeholder='Введите название товара...'
        aria-label=''
        aria-describedby='basic-addon1'
      />
    </form>
  );
};

export default SearchBar;
