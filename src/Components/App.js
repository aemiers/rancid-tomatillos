import React, { Component } from 'react';
import '../Sass/App.scss';
import Header from './Header';
import MovieDetails from './MovieDetails';
import tomatillo from '../assets/tomatillo.svg';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import { fetchAllMovies, fetchSingleMovie, fetchVideo } from '../Data/apiCalls';
import logo from '../assets/logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [], //all of the movie on home page
      movieDetails: [], //singe movie
      filteredMovies: [],
      pageLocation: 0,
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
    this.setState({ movieDetails: [] })
    this.setState({ pageLocation: id })
    if (id) {
      fetchSingleMovie(id)
      .then(movie => {
        this.setState({ movieDetails: movie.movie });
      })
      .catch(err => this.setState({ error: 'There was a problem loading the movie details' }))
    }
  }

  render() {
    return (
      <>
        {this.state.error && (
          <h2 className='error'>{this.state.error}</h2>
        )}
        {this.state.movieData.length > 0 && (
          // {this.state.movieData && (
          < main className='App' >
            <Header click={this.clickHandler} />
            {
              !this.state.pageLocation && <MovieList
                movies={this.state.movieData}
                calc={this.calculatePercent}
                icon={tomatillo}
                click={this.clickHandler}
              />
            }
            {
              this.state.pageLocation && <MovieDetails
                movie={this.state.movieDetails}
                icon={tomatillo}
                id={this.state.pageLocation}
              />
            }
          </main >
        )}
      </>
    )
  }
}

export default App;