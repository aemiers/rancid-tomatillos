import React from 'react';
import './MovieCard.scss';
import tomatillo from '../assets/tomatillo.svg';

const MovieCard = ({ id, title, poster, rating, date }) => {
  return (
    <section data={id} className='movieCard'>
      <img src={poster} />
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

// what about alt tags in images?
// A poster for the movie {title}

//STYLE PLAN

//make each card a grid
//flex container for the info: title + flex container for the
//icon and percentage
//opacity and info are hidden
//^^^these fill the grid (maybe the info is in the bottom third)
//hover state removes hidden class from info
//hover state enlarges and card and adds border
