import React, { Component } from 'react';
import '../Sass/Dropdown.scss';
import filterIcon from '../assets/filter.svg';
import dropdown from '../assets/dropdown.svg';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
  }

  showMenuHandler = event => {
    event.preventDefault();
    this.state.showMenu === false ? this.setState({ showMenu: true }) : this.setState({ showMenu: false })
  }

  dropdownFilterSearch = event => {
    event.preventDefault();
    this.props.stateChange('filteredMovies', []);
    const resultMovies = this.props.movies.filter(movie => {
      const clickedId = parseInt(event.target.id)
      const parsedRating = parseInt(movie.rating)
      if (clickedId === 0 && parsedRating <= 29) {
        return movie
      } else if (parsedRating >= clickedId && parsedRating <= (clickedId + 9)) {
        return movie
      }
    })
    if (!resultMovies.length) {
      console.log(resultMovies);
      this.props.stateChange('error', 'No movies found')
    } else {
      this.props.stateChange('filteredMovies', resultMovies);
    }
    this.setState({ showMenu: false })
  }

  render() {
    return (
      <div className='menu-container'>
        <button className="drop-down" id="dropDown" aria-label="Open drop down menu" onClick={event => this.showMenuHandler(event)}>
          <img className='filter-icon' src={filterIcon} alt="filter icon" />
          <img className='down-icon' src={dropdown} alt="drop down icon" />
        </button>
        {this.state.showMenu
          ? (
            <div className="drop-down__menu" onClick={event => this.dropdownFilterSearch(event)}>
              <button id="0" className="drop-down__choice"> 0 - 29% </button>
              <button id="30" className="drop-down__choice"> 30 - 39% </button>
              <button id="40" className="drop-down__choice"> 40 - 49% </button>
              <button id="50" className="drop-down__choice"> 50 - 59% </button>
              <button id="60" className="drop-down__choice"> 60 - 69% </button>
              <button id="70" className="drop-down__choice"> 70 - 79% </button>
              <button id="80" className="drop-down__choice"> 80 - 89% </button>
              <button id="90" className="drop-down__choice"> 90 - 100% </button>
            </div>)
          : (null)
        }
      </div>
    );
  }
}

export default Dropdown;
