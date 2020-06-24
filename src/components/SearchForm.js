
import React, { Component } from 'react'
import MovieCard from './MovieCard';
import styles from './SearchForm.module.css';

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieName: '',
      movies: []
    }
  }
