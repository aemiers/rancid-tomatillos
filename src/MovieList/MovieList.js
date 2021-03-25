import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        rating={movie.average_rating}
        date={movie.release_date}
      />
    )
  })

  return (
    <section className='movieGrid'>
      {movieCards}
    </section>
  )
}

export default MovieList;
