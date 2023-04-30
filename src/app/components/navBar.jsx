import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <ul className='nav nav-pills justify-content-end'>
      <li className='nav-item'>
        <Link
          className={`nav-link ${activeLink === 'Главная' ? 'active' : ''}`}
          aria-current='page'
          to='/'
          onClick={() => handleClick('Главная')}
        >
          Главная
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className={`nav-link ${activeLink === 'Логин' ? 'active' : ''}`}
          to='/login'
          onClick={() => handleClick('Логин')}
        >
          Логин
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className={`nav-link ${activeLink === 'Регистрация' ? 'active' : ''}`}
          to='/registration'
          onClick={() => handleClick('Регистрация')}
        >
          Регистрация
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
