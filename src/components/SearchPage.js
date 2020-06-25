
import React, { Component } from 'react'
// import MovieCard from './MovieCard';
import styles from './SearchPage.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


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
        <Form>

          <Form.Group controlId="formBasicSearch" onSubmit={this.handleFormSubmit}>
            <Row className="justify-content-sm-center">
              <Col sm="4" className="p-0">
                <Form.Control type="text" placeholder="Search for a movie ..." value={this.state.title} onChange={this.handleChange} />
              </Col>
              <Col sm="auto" className="p-0">
                <Button variant="primary" type="submit">Search</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Text className="text-muted">
                  Your movie search will not be judged ... or maybe it will?
                </Form.Text>
              </Col>
            </Row>
          </Form.Group>
        </Form>

      </div >
    )
  }
}