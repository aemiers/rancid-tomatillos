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
import logo from '../assets/logo.svg';
import tomatillo from '../assets/tomatillo.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // movieData: movieData.movies,
      // movieDetails: fakeMovieDetails.movie
      movieData: [], //all of the movie on home page
      movieDetails: [], //singe movie
      filteredMovies: [],
      pageLocation: 0,
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

  // filterMovies function here, also need to pass filterMovies funtion to header

  calculatePercent = rating => {
    return (rating.toFixed(1) * 10);
  }

  clickHandler = (id) => {
    this.setState({ pageLocation: id })
  }

  render() {
    return (
      <main className='App'>

        <Header click={this.clickHandler} />
        {!this.state.pageLocation && <MovieList
          movies={this.state.movieData}
          calc={this.calculatePercent}
          icon={tomatillo}
          click={this.clickHandler}
        />}
        {this.state.pageLocation && <MovieDetails
          movie={this.state.movieDetails}
          icon={tomatillo}
          id={this.state.pageLocation}
        />}
        <div className="bottom-logo">
          <img src={logo} alt="rancid tomatillos logo" />
        </div>
      </main>
    )
  }
}

export default App;
