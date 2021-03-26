import React from 'react';
import './MovieDetails.scss';

const MovieDetails = ({ movie }) => {

  const formatYear = movieDate => {
    return new Date(movieDate).getFullYear()
  }

  const formatRunTime = movieRuntime => {
    const hours = Math.floor(movieRuntime / 60);
    const minutes = movieRuntime % 60;
    return `${hours}h ${minutes}m`;
  }

  const calculatePercent = rating => {
    return Math.round(rating * 10);
  }

  return (
    <section className="movie-details-section">
      <h1>{movie.title}</h1>
      <h3>{calculatePercent(movie.average_rating)}% · {movie.genres[0]} · {formatYear(movie.release_date)} · {formatRunTime(movie.runtime)}</h3>
      <p>{movie.overview}</p>
      <img alt="movie backdrop" src={movie.backdrop_path} />
    </section>
  )
}

export default MovieDetails;