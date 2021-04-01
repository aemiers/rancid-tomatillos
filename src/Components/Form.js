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
    const resultMovies = this.props.movies.filter(movie => {
      return movie.title.toLowerCase().includes(formattedSearchWords)
    })
    this.props.updateFilteredMovies(resultMovies)
  }

  submitSearchWords = event => {
    event.preventDefault();
    this.handleChange(event);
    this.filterSearch();
    // this.props.filterMovies(this.state.value)
  }

  clearInputs = () => {
    this.setState({ searchWords: '' });
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
          onChange={event => this.submitSearchWords(event)}
        />
        <button onClick={this.clearInputs}><img className='clear-icon' src={cancel} alt="clear button" /></button>
      </form>
    )
  }
}

export default Form;
