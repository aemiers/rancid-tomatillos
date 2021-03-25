import React, { Component } from 'react';
import './App.css';
import movieData from '../Data/movieData';


import fakeMovieData from '../Data/fakeMovieData';
import MovieDetails from '../MovieDetails/MovieDetails';
// please check previous lines

import MovieList from '../MovieList/MovieList';
import MovieCard from '../MovieCard/MovieCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: movieData.movies,
      movieDetails: fakeMovieData.movie
    }
  }

  render() {
    return (
      <main className='App'>
        <MovieList movies={this.state.movieData} />
        <MovieDetails movie={this.state.movieDetails} />
        {/* please check previous line */}
      </main>
    )
  }
}

export default App;

//filter/search functionality 
