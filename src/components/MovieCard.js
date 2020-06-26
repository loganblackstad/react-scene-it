import React, { Component } from 'react'
import styles from './MovieCard.module.css';

export default class MovieCard extends Component {


  render() {
    return (
      <div className={styles.MovieCard} >
        <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
        <h1>{this.props.movie.Title}</h1>
        <p>{this.props.movie.Year}</p>
        {this.props.removeFromWatchList ? <button onClick={() => this.props.removeFromWatchList(this.props.movie)}>Remove from WatchList</button> :
          <button onClick={() => this.props.addToWatchList(this.props.movie)}>Add to WatchList</button>
        }
      </div>
    )
  }
}
