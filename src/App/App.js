import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import movieData from '../Data/movieData';
import fakeMovieDetails from '../Data/fakeMovieDetails';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieList from '../MovieList/MovieList';
import MovieCard from '../MovieCard/MovieCard';
import logo from '../assets/logo.svg';

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

  calculatePercent = rating => {
     return (rating.toFixed(1) * 10);
   }

  render() {
    return (
      <main className='App'>
        <Header />
        {/* also need to pass filterMovies function to header to get to form */}
        <MovieList movies={this.state.movieData} calc={this.calculatePercent} />
        {/* <MovieDetails movie={this.state.movieDetails} />*/}
        <img src={logo} alt="rancid tomatillos logo" />
      </main>
    )
  }
}

export default App;
