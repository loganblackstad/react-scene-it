
import React, { Component } from 'react'
// import MovieCard from './MovieCard';
import styles from './SearchPage.module.css';
import Button from 'react-bootstrap/Button';


export default class SearchPage extends Component {
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
      <div className={styles.SearchPage} >
        <h1 className={styles.titleSceneIt}>Scene-It</h1>
        <p>Search for movies you want to watch.</p>
        <p>Save them to your Watch List</p>
        <p>Go to My WatchList</p>
        <form onSubmit={this.handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor='title'></label>
            <input type='text' id='title' name='title' placeholder="Search for a movie..." value={this.state.title} onChange={this.handleChange} />
            <Button variant="primary" type="submit">Search</Button>
          </div>
        </form>
      </div>
    )
  }
}