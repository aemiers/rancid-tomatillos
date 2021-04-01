import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Sass/MovieDetails.scss';
import { fetchSingleMovie, fetchVideo } from '../Data/apiCalls';


class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieDetails: {},
      videos: []
    }
  }

  componentDidMount() {
    this.props.stateChange(this.props.id);
    Promise.all([fetchSingleMovie(this.props.id), fetchVideo(this.props.id)])
      .then((movieData) => {
        this.setState({ movieDetails: movieData[0].movie})
        this.setState({ videos: movieData[1].videos})
      })
      // .catch(err => this.setState({ error: 'Something went wrong' }));
  }


  formatYear = movieDate => {
    return new Date(movieDate).getFullYear()
  }

  formatRunTime = movieRuntime => {
    const hours = Math.floor(movieRuntime / 60);
    const minutes = movieRuntime % 60;
    return `${hours}h ${minutes}m`;
  }

  calculatePercent = rating => {
    return Math.round(rating * 10);
  }

  formatGenre = movieGenres => {
    if (movieGenres) {
      return movieGenres[0]
    }
    return
  }

  formatVideos = videos => {
    if (videos.length) {
      return videos[0].key
    }
  }

  render() {
    return (
      <div className="flex-container">
        <section className="movie-details-section">
          <div className='backdrop-container'>
            <img className='backdrop' alt="movie backdrop" src={this.state.movieDetails.backdrop_path} />
            <div className='overlay'> </div>
          </div>
          <section className='movie-words-container'>
            <h1 className='movie-words__title'>{this.state.movieDetails.title}</h1>
            <h2 className='movie-words__details'><img className='tomatillo' src={this.props.icon} alt='tomatillo icon' />{this.calculatePercent(this.state.movieDetails.average_rating)}% · {this.formatGenre(this.state.movieDetails.genres)} · {this.formatYear(this.state.movieDetails.release_date)} · {this.formatRunTime(this.state.movieDetails.runtime)}</h2>
            <p className='overview'>{this.state.movieDetails.overview}</p>
          </section>
        </section>
        <aside className='video-container'>
          <iframe
            loading="lazy"
            gesture="media"
            src={`https://www.youtube.com/embed/${this.formatVideos(this.state.videos)}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </aside>
      </div>
    )
  }
}



export default MovieDetails;
