import React from 'react';
import './MovieCard.scss';


const MovieCard = ({ id, title, poster, rating, icon, click }) => {

  return (
    <button onClick={event => click(id)} className='movie-card'>
      <img src={poster} alt={title} className='poster'/>
      <aside className='card-info'>
        <h3>{title}</h3>
        <div className='rating-box'>
          <h4>{rating}%</h4>
          <img src={icon} alt='tomatillo icon' />
        </div>
      </aside>
    </button>
  )
}

export default MovieCard;
