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
          <img src={icon} alt='tomatillo icon' />
          <p>{rating}%</p>
        </div>
        <p className='hover-title'>{title}</p>
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
};
