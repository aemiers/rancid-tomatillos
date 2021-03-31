import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

const MovieCard = ({ id, title, poster, rating, icon, click }) => {

  return (
    <button onClick={event => click(id)} className='movie-card'>
      <img src={poster} alt={title} className='poster' />
      <aside className='card-info'>
        <div className='rating-box'>
          <img className='tomatillo' src={icon} alt='tomatillo icon' />
          <h4 className='rating'>{rating}%</h4>
        </div>
        <h3 className='hover-title'>{title}</h3>
      </aside>
    </button>
  )
}

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number,
  icon: PropTypes.string,
  click: PropTypes.func
};
