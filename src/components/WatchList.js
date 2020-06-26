import React, { Component } from 'react';
import MovieCard from './MovieCard';


export default class WatchList extends Component {
  render() {
    return (
      <div>
        {this.props.watchList.map(movie => { return <MovieCard movie={movie} removeFromWatchList={this.props.removeFromWatchList} /> })}
      </div>
    )
  }
}
