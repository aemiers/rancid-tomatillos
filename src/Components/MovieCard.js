import React from 'react';
import PropTypes from 'prop-types';
import '../Sass/MovieCard.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, poster, rating, icon, }) => {

  return (
    <Link to={`/${id}`} className='movie-card'>
      <img src={poster} alt={title} className='poster' />
      <aside className='card-info'>
        <div className='rating-box'>
          <img className='tomatillo' src={icon} alt='tomatillo icon' />
          <h4 className='rating'>{rating}%</h4>
        </div>
        <h3 className='hover-title'>{title}</h3>
      </aside>
    </Link>
  )
}

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number,
  icon: PropTypes.string,
  // stateChange: PropTypes.func
};

