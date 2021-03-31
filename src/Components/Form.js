import React, { Component } from 'react';
import search from '../assets/search.svg';
import cancel from '../assets/cancel.svg';
import '../Sass/Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWords: ''
    }
  }

  handleChange = event => {
    this.setState({ searchWords: event.target.value });
  }

  submitIdea = event => {
    event.preventDefault();
    this.props.filterMovies(this.state.value)
    this.clearInputs();
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
          onChange={event => this.handleChange(event)}
        />
        <button onClick={this.clearInputs}><img className='clear-icon' src={cancel} alt="clear button" /></button>
      </form>
    )
  }
}

export default Form;
