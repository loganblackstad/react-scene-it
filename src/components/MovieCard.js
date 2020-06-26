import React, { Component } from 'react'
import styles from './MovieCard.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


export default class MovieCard extends Component {


  render() {
    return (
      <div className={styles.MovieCard} >
        <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
        <p className={styles.movieTitle}>{this.props.movie.Title} ({this.props.movie.Year})</p>
        {this.props.removeFromWatchList ? <Button variant="secondary" onClick={() => this.props.removeFromWatchList(this.props.movie)}>Remove from WatchList</Button> :
          <Button variant="secondary" onClick={() => this.props.addToWatchList(this.props.movie)}>Add to WatchList</Button>
        }
      </div>
    )
  }
}
