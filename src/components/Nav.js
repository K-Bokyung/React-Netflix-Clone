import React, { useEffect, useState } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        alt='Netfilx logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png'
        className='nav__logo'
        onClick={() => window.location.reload()}
      />

      <input
        value={searchValue}
        onChange={handleChange}
        className='nav__input'
        type='text'
        placeholder='영화를 검색해주세요.'
      />

      <img
        alt='User logged'
        src='https://occ-0-3997-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS5zyiA_uDE4vs9AaQKq7KpZzp9enMkWlZ8tEAVdupwBwH-xsA7pN7Y3cUUYWGtKARFEBN-mUEpPigEi2COFrSUSp7tf3zE.png?r=bd7'
        className='nav__avatar'
      />
    </nav>
  );
};

export default Nav;
