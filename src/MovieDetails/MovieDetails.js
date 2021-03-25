import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {

  return (
    <section className="movie-details-section">
      <h1>{movie.title}</h1>
      <h3>{movie.average_rating} · {movie.genres[0]} · {movie.release_date} · {movie.runtime}</h3>
      <p>{movie.overview}</p>
      <img alt="movie backdrop" src={movie.backdrop_path} />
    </section>
  )
}

export default MovieDetails;

// id, title, poster_path, backdrop_path, release_date, overview, average_rating, generes, budget, revenue, runtime, tagline