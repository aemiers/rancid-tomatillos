import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../Sass/MovieList.scss';
import { formatRating } from '../utilities';


const MovieList = ({ movies, calc, icon }) => {

  const movieCards = movies.map(movie => {
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
  calc: PropTypes.func,
  icon: PropTypes.string,
};
