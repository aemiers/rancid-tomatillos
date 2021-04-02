import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Sass/MovieDetails.scss';
import { fetchSingleMovie, fetchVideo } from '../Data/apiCalls';
import { formatYear, formatRunTime, calculatePercent, formatGenre, formatVideos, formatRating } from '../utilities';


class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieInfo: {},
      error: ''
    }
  };

  componentDidMount() {
    this.props.stateChange(this.props.id);
    Promise.all([fetchSingleMovie(this.props.id), fetchVideo(this.props.id)])
      .then((movieData) => {
        console.log(movieData);
        this.setState({ movieInfo: this.buildStateObject(movieData)})
      })
      .catch(err => this.setState({ error: 'Something went wrong' }));
  }

  buildStateObject(movieData) {
    const movie = {
      backdrop: movieData[0].movie.backdrop_path,
      title: movieData[0].movie.title,
      overview: movieData[0].movie.overview ,
      rating: formatRating(movieData[0].movie.average_rating),
      genre: formatGenre(movieData[0].movie.genres),
      release_date: formatYear(movieData[0].movie.release_date),
      runtime: formatRunTime(movieData[0].movie.runtime),
      // videoKey: formatVideo(movieData[1].videos)
     };
      return movie;
  }


  render() {
    return (
      <div className="flex-container">
        <section className="movie-details-section">
          <div className='backdrop-container'>
            <img className='backdrop' alt="movie backdrop" src={this.state.movieInfo.backdrop} />
            <div className='overlay'> </div>
          </div>
          <section className='movie-words-container'>
            <h1 className='movie-words__title'>{this.state.movieInfo.title}</h1>
            <h2 className='movie-words__details'><img className='tomatillo' src={this.props.icon} alt='tomatillo icon' />{this.state.movieInfo.rating}% · {this.state.movieInfo.genre} · {this.state.movieInfo.release_date} · {this.state.movieInfo.runtime}</h2>
            <p className='overview'>{this.state.movieInfo.overview}</p>
          </section>
        </section>
        <div className='video-container'>
        <aside className='iframe-container'>
          <iframe
            loading="lazy"
            src={`https://www.youtube.com/embed/${this.state.videoKey}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </aside>
        </div>
      </div>
    )
  }
}

export default MovieDetails;
