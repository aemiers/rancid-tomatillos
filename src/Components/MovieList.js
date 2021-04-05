import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../Sass/MovieList.scss';
import { formatRating } from '../utilities';
import Dropdown from './Dropdown';

const MovieList = ({ movies, filteredMovies, icon, stateChange, error }) => {

  let moviesToDisplay = filteredMovies.length ? filteredMovies : movies;
  if (!filteredMovies.length && error) {
    moviesToDisplay = [];
  }

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
        <Dropdown
          stateChange={stateChange}
          movies={movies}
        />
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
  filteredMovies: PropTypes.array,
  icon: PropTypes.string,
};
