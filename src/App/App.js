import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
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
      // movieData: [], 
      // movieDetails: [], 
      // filteredMovies: [], 
      // error: ''
    }
  }

  // filterMovies function here

  render() {
    return (
      <main className='App'>
        <Header />
        {/* also need to pass filterMovies function to header to get to form */}
        <MovieList movies={this.state.movieData} />
        <MovieDetails movie={this.state.movieDetails} />
        {/* <img src={tomatillo} alt='tomatillo' /> */}
        <img alt="tomatillo" src="./assets/tomatillo.svg" class="user-info__croper--pic" />

        {/* <SvgTomatillo /> */}
      </main>
    )
  }
}

export default App;