import React, { Component } from 'react';
import '../Sass/App.scss';
import Header from './Header';
import MovieDetails from './MovieDetails';
import tomatillo from '../assets/tomatillo.svg';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import { fetchAllMovies, fetchSingleMovie, fetchVideo} from '../Data/apiCalls';
import logo from '../assets/logo.svg';
import { Route, Switch } from 'react-router-dom';
import { formatRating } from '../utilities';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      filteredMovies: [],
      singleMovieID: '',
      isLoading: true,
      error: ''
    }
  }

  componentDidMount() {
    fetchAllMovies()
      .then(movies => this.setState({
        movieData: this.prepMovieData(movies.movies)}))
      .catch(err => this.setState({ error: `${err} Something went wrong. Please reload the page and try again.` }))
      this.stateChange('isLoading', false);
  }

  prepMovieData(movieData) {
    const cleanData = movieData.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        rating: formatRating(movie.average_rating)}
    })
    return cleanData;
  }

  stateChange = (dataLocation, newStateData) => {
    this.setState({ [dataLocation]: newStateData })
  }

  render() {
    return (
      <>
        <main className='App' >
          <Header
            stateChange={this.stateChange}
            movies={this.state.movieData}
            filteredMovies={this.filteredMovies}
          />
          {this.state.isLoading && (
            <div className = 'load-container'>
              <h2> Page loading... </h2>
              <div className="spinner-box">
                <div className="circle-border">
                  <div className="circle-core"></div>
                </div>
              </div>
            </div>
          )}
          {this.state.error && ( <h2 className = 'error' > {this.state.error} </h2>)}
          <Switch>
          <Route
            exact
            path="/"
            render={() =>
              <MovieList
                movies={this.state.movieData}
                filteredMovies={this.state.filteredMovies}
                icon={tomatillo}
              />}
          />
          <Route
            exact
            path="/:id"
            render={({ match }) =>
              <MovieDetails
                icon={tomatillo}
                id={match.params.id}
                stateChange={this.stateChange}
              />}
          />
          </Switch>
        </main >
      </>
      )
    }
  }

  export default App;
