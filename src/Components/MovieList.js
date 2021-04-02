import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../Sass/MovieList.scss';

// const MovieList = ({ movies, calc, icon }) => {

const MovieList = ({ movies, filteredMovies, calc, icon, click, display }) => {

  const moviesToDisplay = filteredMovies.length ? filteredMovies : movies;
  const movieCards = moviesToDisplay.map(movie => {

    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        rating={calc(movie.average_rating)}
        icon={icon}
      />
    )
  })

  return (
    <section className='mainList'>
      <h1>Movies</h1>
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
  // stateChange: PropTypes.func
};
