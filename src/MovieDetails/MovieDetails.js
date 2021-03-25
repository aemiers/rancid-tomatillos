import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ id, title, poster_path, backdrop_path, release_date, overview, average_rating, generes, budget, revenue, runtime, tagline }) => {

  return (
    <section className="movie-details-section">
      <h1>{title}</h1>
      <h3>`{average_rating} · {generes.name} · {release_date} · {runtime}</h3>
      <p>{overview}</p>
      <img src={backdrop_path} />
    </section>
  )
}


//Accepts one instance of movieDetail as a prop, accessed via the id 

export default MovieDetails;