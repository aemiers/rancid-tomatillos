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
      <section className='filter-container'>
        <button id="action" class="filter-button" type="submit" value="action">Action</button>
        <button id="adventure" class="filter-button" type="submit" value="adventure">Adventure</button>
        <button id="comedy" class="filter-button" type="submit" value="comedy">Comedy</button>
        <button id="drama" class="filter-button" type="submit" value="drama">Drama</button>
        <button id="fantasy" class="filter-button" type="submit" value="fantasy">Fantasy</button>
        <button id="family" class="filter-button" type="submit" value="family">Family</button>
        <button id="horror" class="filter-button" type="submit" value="horror">Horror</button>
        <button id="romance" class="filter-button" type="submit" value="romance">Romance</button>
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
