
import React, { Component } from 'react'
// import MovieCard from './MovieCard';
import styles from './SearchPage.module.css';
import { Form, Button, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


export default class SearchPage extends Component {

  render() {

    return (
      <div className={styles.SearchPage} >
        <h1 className={styles.titleSceneIt}>Scene-It</h1>
        <p>Search for movies you want to watch.</p>
        <p>Save them to your Watch List</p>
        <p>Go to My WatchList</p>
        <p>Name: {this.props.name}</p>
        <p>Movie List: {this.props.movies.map(movie => { return movie + ", " })}</p>


        {/* REACT BOOTSTRAP FORM for movie search*/}
        <Form>
          <Form.Group controlId="formBasicSearch" >
            <Row className="justify-content-sm-center">
              <Col sm="4" className="p-0">
                <Form.Control type="text" placeholder="Search for a movie ..." value={this.props.name} onChange={this.props.handleChange} />
              </Col>
              <Col sm="auto" className="p-0">
                <Button variant="primary" onClick={this.props.handleSubmit}>Search</Button>
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