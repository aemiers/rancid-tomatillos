import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import logo from '../assets/logo.svg';
import '../Sass/Header.scss'
import { Link } from 'react-router-dom';

const Header = ({ movies, updateFilteredMovies }) => {
  return (
    <>
      <header>
        <section className='header-container'>
          <Link to={'/'} className='logo-container'>
            <img className='logo' src={logo} alt="rancid tomatillos logo" />
          </Link>
          <div className='filter-container'>
            <button id="action" class="filter-button" type="submit" value="action">Action</button>
            <button id="adventure" class="filter-button" type="submit" value="actadventureion">Adventure</button>
            <button id="comedy" class="filter-button" type="submit" value="comedy">Comedy</button>
            <button id="drama" class="filter-button" type="submit" value="drama">Drama</button>
            <button id="horror" class="filter-button" type="submit" value="horror">Horror</button>
          </div>
          <div className='form-container'>
            <Form
              updateFilteredMovies={updateFilteredMovies}
              movies={movies}
            />
          </div>
        </section>
      </header>
    </>
  )
}

export default Header;

Header.propTypes = {
  click: PropTypes.func
};
