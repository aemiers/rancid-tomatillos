import React, { Component } from 'react';
import './App.css';
import movieData from './movieData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: movieData.movies
    }
  }

  render() {
    return (
      //movie List with props
    )
  }
}

export default App;
