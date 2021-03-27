import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ id, title, poster, rating, date }) => {

  return (
    <section data={id} className='movieCard'>
      <img src={poster}/>
      <h3>{title}%</h3>
      <h4>{rating}</h4>
      <h4>{date}</h4>
    </section>
  )
}

export default MovieCard;

// what about alt tags in images?
// A poster for the movie {title}
