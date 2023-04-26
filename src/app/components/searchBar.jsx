import React from 'react';

const SearchBar = (onHandleChange, onHandleSubmit, name) => {
  //   const [name, setName] = useState('');

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(name);
  //   };

  //   const handleChange = (e) => {
  //     setName(e.target.value);
  //   };

  return (
    <form onSubmit={onHandleSubmit} className='input-group mb-3'>
      <div className='input-group-prepend'>
        <button className='btn btn-outline-secondary' type='submit'>
          Поиск
        </button>
      </div>
      <input
        onChange={onHandleChange}
        value={name}
        className='form-control'
        placeholder='Введите название товара'
        aria-label=''
        aria-describedby='basic-addon1'
      />
    </form>
  );
};

export default SearchBar;
