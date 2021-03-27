import React, { Component } from 'react';
import './App.css';
import '../src/Sass/index.scss';
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
    console.log("hello");
    return (
      <main className='App'>
        <h1>hello</h1>
        <MovieList movies={this.state.movieData} />
      </main>
    )
  }
}

export default App;

//filter/search functionality
