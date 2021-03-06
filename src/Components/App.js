import React, { Component } from 'react';
import '../Sass/App.scss';
import Header from './Header';
import MovieDetails from './MovieDetails';
import tomatillo from '../assets/tomatillo.svg';
import MovieList from './MovieList';
import { fetchAllMovies } from '../Data/apiCalls';
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
      .then((movies) => {
        this.setState({ movieData: this.prepMovieData(movies.movies) })
        this.stateChange('isLoading', false);
      })
      .catch(err => this.setState({ error: 'There was a loading error. Please reload the page and try again.' }))
  }

  prepMovieData(movieData) {
    const cleanData = movieData.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        rating: formatRating(movie.average_rating)
      }
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
            singleMovieID={this.state.singleMovieID}
          />
          {this.state.isLoading && (
            <div className='load-container'>
              <h2> Page loading... </h2>
              <div className="spinner-box">
                <div className="circle-border">
                  <div className="circle-core"></div>
                </div>
              </div>
            </div>
          )}
          {this.state.error && (<p className='error' > {this.state.error} </p>)}
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                <MovieList
                  movies={this.state.movieData}
                  filteredMovies={this.state.filteredMovies}
                  icon={tomatillo}
                  stateChange={this.stateChange}
                  error={this.state.error}
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
