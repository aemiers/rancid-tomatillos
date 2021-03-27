import React from 'react';
import './MovieCard.scss';
import tomatillo from '../assets/tomatillo.svg';

const MovieCard = ({ id, title, poster, rating, date }) => {
  return (
    <section data={id} className='movieCard'>
      <img src={poster} alt={title} />
      <aside className='cardInfo'>
        <h3>{title}</h3>
        <div className='ratingBox'>
          <img src={tomatillo} alt='tomatillo icon' />
          <h4>{(rating.toFixed(1)) * 10}%</h4>
        </div>
      </aside>
    </section>
  )
}

export default MovieCard;
