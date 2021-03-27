import React from 'react';
import './MovieDetails.scss';

const MovieDetails = ({ movie, icon }) => {

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
      <div className='backdrop-container'>
        <img className='backdrop' alt="movie backdrop" src={movie.backdrop_path} />
        <div className='overlay'> </div>
      </div>
      <section className='movie-words-container'>
        <h1 className='movie-words__title'>{movie.title}</h1>
        <h3 >{icon}{calculatePercent(movie.average_rating)}% · {movie.genres[0]} · {formatYear(movie.release_date)} · {formatRunTime(movie.runtime)}</h3>
        <p className='overview'>{movie.overview}</p>
      </section>

    </section>
  )
}

export default MovieDetails;