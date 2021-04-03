import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../Sass/MovieList.scss';
import { formatRating } from '../utilities';

const MovieList = ({ movies, filteredMovies, icon }) => {

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
  filteredMovies: PropTypes.array,
  icon: PropTypes.string,
};
