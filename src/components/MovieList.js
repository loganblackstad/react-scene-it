import React, { Component } from 'react'
import styles from './MovieList.module.css';

export default class MovieList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      details: {},
      loading: false,
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
      </div>
    )
  }
}
