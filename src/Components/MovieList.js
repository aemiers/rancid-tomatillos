import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// import filterIcon from '../assets/filter.svg';
import '../Sass/MovieList.scss';
import { formatRating } from '../utilities';
import Dropdown from './Dropdown';


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
        <Dropdown />
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
