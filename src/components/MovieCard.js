import React, { Component } from 'react'
import styles from './MovieCard.module.css';

export default class MovieCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      details: {},
      loading: true,
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
      <div className={styles.MovieCard} >
        <h1>{details.name}</h1>
        <p>Review:  {details.review}</p>
        {/* <p>Likes:  {details.likes} <button onClick={() => this.increaseLikes(props.id) > <span role="img" aria-label="Likes: ">👍</span></button></p> */}
      </div>
    )
  }
}
