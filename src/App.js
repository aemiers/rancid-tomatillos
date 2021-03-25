import React, { Component } from 'react';
import './App.css';
import movieData from './movieData';
import MovieList from './MovieList';
import MovieCard from './MovieCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: movieData.movies
    }
  }

  render() {
    return (
      <main className='App'>
        <MovieList movies={this.state.movieData} />
      </main>
    )
  }
}

export default App;

//filter/search functionality 
