import React from 'react';
import './MovieCard.css';

const MovieCard = ({ id, title, poster, rating, date }) => {
  return (
    <section data={id} className='movieCard'>
      <h3>{title}</h3>
      <img src={poster}/>
      <h4>{rating}</h4>
      <h4>{date}</h4>
    </section>
  )
}

export default MovieCard;
