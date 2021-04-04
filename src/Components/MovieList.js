import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import filterIcon from '../assets/filter.svg';
import '../Sass/MovieList.scss';
import { formatRating } from '../utilities';


const MovieList = ({ movies, filteredMovies, icon }) => {

  // const filterBtnSearch = event => {
  //   event.preventDefault();
  //   const resultMovies = this.props.movies.filter(movie => {
  //     return movie.genre.includes(event.target.value)
  //   })

  //   this.props.updateFilteredMovies(resultMovies);
  // }

  // const reveal = (event) => {
  //   console.log('hello')
  // }

  const moviesToDisplay = filteredMovies.length ? filteredMovies : movies;

  // const options = [
  //   'one', 'two', 'three'
  // ];
  // const defaultOption = options[0];



  const movieCards = moviesToDisplay.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster}
        rating={movie.rating}
        icon={icon}
      />
    )
  })

  return (
    <section className='main-list'>
      <section className='main-list__header'>
        <h1 className='main-list__title'>Browse Rated Movies</h1>
        {/* <Dropdown options={options} onChange={reveal} value={defaultOption} placeholder="Select an option" />; */}

        {/* <nav role="navigation" className='drop-down__container'> */}
        {/* <button class="drop-down" id="dropDown" aria-label="Open drop down menu" onClick={event => reveal(event)}>
            <img className='filter-icon' src={filterIcon} alt="filter icon" />
            <img className='down-icon' src={dropdown} alt="drop down icon" />
          </button>
          <ul class="drop-down__content" id="navButtonContainer">
            <button id="0" class="drop-down__btn">0-29% Rating</button>
            <button id="30" class="drop-down__btn">30-39% Rating</button>
            <button id="40" class="drop-down__btn">40-49% Rating</button>
            <button id="50" class="drop-down__btn">50-59% Rating</button>
            <button id="60" class="drop-down__btn">60-69% Rating</button>
            <button id="70" class="drop-down__btn">70-79% Rating</button>
            <button id="80" class="drop-down__btn">80-89% Rating</button>
            <button id="90" class="drop-down__btn">90-100% Rating</button>
          </ul> */}

        {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        {/* </nav> */}





      </section>
      <section className='movieGrid'>
        {movieCards}
      </section>
    </section>
  )
}

export default MovieList;

MovieList.propTypes = {
  movie: PropTypes.object,
  calc: PropTypes.func,
  icon: PropTypes.string,
};
