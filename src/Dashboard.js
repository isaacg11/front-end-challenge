import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Movies from './components/movies/Movies';
import './bootstrap-overrides.css';

// @params {Array} movies
// @params {Object} image

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navigation image={this.props.image} />
        <Movies movies={this.props.movies} />
      </div>
    )
  }
}
