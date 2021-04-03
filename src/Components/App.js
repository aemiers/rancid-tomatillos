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
        movieData: this.prepMovieData(movies.movies)
      }))
      .catch(err => this.setState({
        error: 'Something went wrong. Please reload the page and try again.'
      }))
    this.setState({ isLoading: false });
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
    console.log(cleanData);
    return cleanData;
  }

  stateChange = (newStateData) => {
    this.setState({ singleMovieID: newStateData })
  }

  render() {
    return (
      <>
        {this.state.error && (<h2 className='error' > {this.state.error} </h2>)}
        <main className='App' >
          <Header stateChange={this.stateChange} />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                <MovieList
                  movies={this.state.movieData}
                  calc={this.calculatePercent}
                  icon={tomatillo}
                  stateChange={this.stateChange} />}
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
      </>
    )
  }
}

export default App;
