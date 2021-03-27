import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: '',
      // description: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitIdea = event => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      ...this.state // spreading in the title and description
    }
    this.props.addIdea(newIdea);
    this.clearInputs();
  }

  clearInputs = () => {
    // this.setState({ title: '', description: '' });
    this.setState({ words: '' });

  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search for movies'
          name='search'
          value={this.state.words}
          onChange={event => this.handleChange(event)}
        />

        {/* <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        /> */}

        <button onClick={event => this.submitIdea(event)}>SUBMIT</button>
        {/* adding the event listener to the button */}
      </form>
    )
  }
}

export default Form;