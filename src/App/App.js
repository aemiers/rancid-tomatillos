import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import tomatillo from '../assets/tomatillo.svg';
import MovieList from '../MovieList/MovieList';
import MovieCard from '../MovieCard/MovieCard';
import { fetchAllMovies, fetchSingleMovie, fetchVideo } from '../Data/apiCalls';
import logo from '../assets/logo.svg';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [], //all of the movie on home page
      movieDetails: [], //singe movie
      filteredMovies: [],
      pageLocation: 0,
      currentMovie: {},
      isLoading: true,
      error: '',

    }
  }

  componentDidMount() {
    fetchAllMovies()
      .then(movies => this.setState({ movieData: movies.movies }))
      .catch(err => this.setState({ error: 'Something went wrong' }))
  }

  // filterMovies function here, also need to pass filterMovies funtion to header

  calculatePercent = rating => {
    return (rating.toFixed(1) * 10);
  }

  clickHandler = (id) => {
    this.setState({ pageLocation: id })
    fetchSingleMovie(id)
      .then(movie => {
        this.setState({ movieDetails: movie.movie });
      })
  }

  render() {
    return (
      // <>
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
      </main>
      // </>
    )
  }
}

export default App;
