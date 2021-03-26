import React, { Component } from 'react';
import './App.scss';
import movieData from '../Data/movieData';
import fakeMovieDetails from '../Data/fakeMovieDetails';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieList from '../MovieList/MovieList';
import MovieCard from '../MovieCard/MovieCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: movieData.movies,
      movieDetails: fakeMovieDetails.movie
    }
  }

  render() {
    return (
      <main className='App'>
        {/* <MovieList movies={this.state.movieData} /> */}
        <MovieDetails movie={this.state.movieDetails} />
      </main>
    )
  }
}

export default App;

//filter/search functionality 
