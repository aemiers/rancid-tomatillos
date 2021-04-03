import React, { Component } from 'react';
import search from '../assets/search.svg';
import cancel from '../assets/cancel.svg';
import '../Sass/Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWords: '',
    }
  }

  handleChange = event => {
    this.setState({ searchWords: event.target.value });
  }

  filterSearch = () => {
    const formattedSearchWords = this.state.searchWords.toLowerCase();
    // console.log('format', formattedSearchWords)
    const resultMovies = this.props.movies.filter(movie => {
      return movie.title.toLowerCase().includes(formattedSearchWords)
    })
    console.log('resultMovies', resultMovies)
    this.props.stateChange('filteredMovies', resultMovies);
  }

  clearInputs = event => {
    event.preventDefault(event);
    this.handleChange(event);
    this.setState({ searchWords: '' });
    this.props.stateChange('filteredMovies', []);
  }

  render() {
    return (
      <form>
        <img className='search-icon' src={search} alt="search icon" />
        <input
          type='text'
          placeholder='Search for movies'
          name='search'
          value={this.state.searchWords}
          onChange={this.handleChange}
          onKeyUp={this.filterSearch}
        />
        <button onClick={event => this.clearInputs(event)}><img className='clear-icon' src={cancel} alt="clear button" /></button>
      </form>
    )
  }
}

export default Form;
