import React from 'react';
import './MovieCard.scss';


const MovieCard = ({ id, title, poster, rating, date, icon }) => {



  const clickHandler = () => {
    console.log(id);
  }

  return (
    <button onClick={clickHandler} data={id} className='movieCard'>
      <img src={poster} alt={title} />
      <aside className='cardInfo'>
        <h3>{title}</h3>
        <div className='ratingBox'>
          <img src={icon} alt='tomatillo icon' />
          <h4>{rating}%</h4>
        </div>
      </aside>
    </button>
  )
}

export default MovieCard;
