import React, { Component } from 'react';
import '../Sass/App.scss';
import Header from './Header';
import MovieDetails from './MovieDetails';
import tomatillo from '../assets/tomatillo.svg';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import { fetchAllMovies, fetchSingleMovie, fetchVideo } from '../Data/apiCalls';
import logo from '../assets/logo.svg';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [], //all of the movie on home page
      filteredMovies: [],
      singleMovieID: '', //path
      // isLoading: true,
      error: '',
    }
  }

  componentDidMount() {
    fetchAllMovies()
      .then(movies => this.setState({
        movieData: movies.movies
      }))
      .catch(err => this.setState({
        error: 'Something went wrong'
      }))
  }

  // filterSearch = (searchWords) => {
  //   const formattedSearchWords = searchWords.toLowerCase();
  //   const resultMovies = this.state.movieData.filter(movie => {
  //     return movie.title.toLowerCase.includes(formattedSearchWords)
  //   })
  //   this.setState({ filteredMovies: resultMovies })
  // }

  calculatePercent = rating => {
    return (rating.toFixed(1) * 10);
  }

  stateChange = (newStateData) => {
    this.setState({ singleMovieID: newStateData })
  }
  // Refactored version to also allow header to pass in data to filteredMovies
  // stateChange = (dataLocation, newStateData) => {
  //   this.setState({ dataLocation: newStateData })
  // }

  updateFilteredMovies = (newStateData) => {
    this.setState({ filteredMovies: newStateData })
  }

  // clickHandler = (id) => {
  //   this.setState({ movieDetails: [] })
  //   this.setState({ pageLocation: id })
  //   if (id) {
  //     fetchSingleMovie(id)
  //     .then(movie => {
  //       this.setState({ movieDetails: movie.movie });
  //     })
  //     .catch(err => this.setState({ error: 'There was a problem loading the movie details' }))
  //   }
  // }

  render() {
    return (
      <> {this.state.error && (<h2 className='error' > {this.state.error} </h2>)}
        <main className='App' >
          <Header
            // stateChange={this.stateChange}
            updateFilteredMovies={this.updateFilteredMovies}
            // filterSearch={this.filterSearch}
            movies={this.state.movieData}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                <MovieList
                  movies={this.state.movieData}
                  filteredMovies={this.state.filteredMovies}
                  calc={this.calculatePercent}
                  icon={tomatillo}
                // stateChange={this.stateChange} 
                // Do we need state change here and in movie list and movie card?
                />}
            />
            <Route
              exact
              path="/:id"
              render={({ match }) =>
                <MovieDetails
                  icon={tomatillo}
                  id={match.params.id}
                  stateChange={this.stateChange} />}
            />
          </Switch>
        </main >
      </>)
  }
}

export default App;
