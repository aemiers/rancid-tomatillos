import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ id, title, poster, rating, icon, click }) => {

  return (
    <button onClick={event => click(id)} className='movie-card'>
      <img src={poster} alt={title} className='poster' />
      <aside className='card-info'>
        <div className='rating-box'>
          <img src={icon} alt='tomatillo icon' />
          <h4>{rating}%</h4>
        </div>
        <h3>{title}</h3>
      </aside>
    </button>
  )
}

export default MovieCard;
