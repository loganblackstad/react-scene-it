
import React, { Component } from 'react'
import MovieCard from './MovieCard';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieName: '',
      movies: []
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`/api/v1/movies/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          details: data,
          loading: false,
        })
      })
  }

  render() {
    const { loading, details } = this.state;

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <div className={styles.MovieList} >
        <h1 className="title-scene-it">Scene-It</h1>
        {/* <p>Review:  {details.review}</p>
        <p>Likes:  {details.likes} <button onClick={() => this.increaseLikes(props.id) > <span role="img" aria-label="Likes: ">👍</span></button></p> */}
      </div>
    )
  }
}