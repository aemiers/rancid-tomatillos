import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import movieData from '../Data/movieData';
import fakeMovieDetails from '../Data/fakeMovieDetails';
import MovieDetails from '../MovieDetails/MovieDetails';
import tomatillo from '../assets/tomatillo.svg';
import MovieList from '../MovieList/MovieList';
import MovieCard from '../MovieCard/MovieCard';
import { fetchAllMovies } from '../Data/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // movieData: movieData.movies,
      // movieDetails: fakeMovieDetails.movie
      movieData: [], //all of the movie on home page
      movieDetails: [], //singe movie
      filteredMovies: [],
      error: ''
    }
  }

  componentDidMount() {
    fetchAllMovies()
      .then(movies => this.setState({ movieData: movies }))
      .catch(err => this.setState({ error: 'Something went wrong' }))
  }


  componentDidUpdate() {
    getSingleMovieData(id)
      .then(movie => this.setState({ movieData: movies }))
      .catch(err => this.setState({ error: 'Something went wrong' }))
  }

  // filterMovies function here

  render() {
    return (
      <main className='App'>
        <Header />
        {/* also need to pass filterMovies function to header to get to form */}
        {/* <MovieList movies={this.state.movieData} /> */}
        <MovieDetails movie={this.state.movieDetails icon={tomatillo}} />
      </main>
    )
  }
}

export default App;