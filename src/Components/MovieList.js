import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';

const MovieList = ({ movies, calc, icon, click }) => {

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        rating={calc(movie.average_rating)}
        icon={icon}
        click={click}
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
  click: PropTypes.func
};
