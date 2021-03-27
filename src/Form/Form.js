import React, { Component } from 'react';
import './Form.scss';

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
    // const newIdea = {
    //   id: Date.now(),
    //   ...this.state // spreading in the title and description
    // }
    // this.props.addIdea(newIdea);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ searchWords: '' });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search for movies'
          name='search'
          value={this.state.searchWords}
          onChange={event => this.handleChange(event)}
        />
        {/* <button onClick={event => this.submitIdea(event)}>SUBMIT</button> */}
        <button onClick={this.clearInputs}>X</button>
      </form>
    )
  }
}

export default Form;