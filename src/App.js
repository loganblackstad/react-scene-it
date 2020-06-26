import React, { Component } from 'react';
import './App.css';
// import MovieList from './components/MovieList';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import MovieCard from './components/MovieCard';
import WatchList from './components/WatchList';
import 'bootstrap/dist/css/bootstrap.min.css';


// set up react router --> look @ code kitchen


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieName: '',
      movies: [],
      name: '',
      watchList: []
    }
  }

  // fetch here

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    // e.preventDefault();
    // alert('A movie was search for: ' + this.state.name);
    // console.log(this.state.movies);

    // fetch call here  
    let urlEncodedSearchString = encodeURIComponent(this.state.name);
    fetch("https://www.omdbapi.com/?apikey=efe3c50b&s=" + urlEncodedSearchString)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: data.Search })
      })
    // this.setState({ movies: [...this.state.movies, this.state.name] });
  }

  addToWatchList = (movieToAdd) => {
    this.setState({ watchList: [...this.state.watchList, movieToAdd] })
  }

  removeFromWatchList = (movieToRemove) => {
    const filteredWatchList = this.state.watchList.filter(movie => movie !== movieToRemove);
    this.setState({ watchList: filteredWatchList });
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/watchlist'>
              <Link to="/">E.T. Go Home</Link>
              <WatchList watchList={this.state.watchList} removeFromWatchList={this.removeFromWatchList} />
            </Route>

            <Route path='/' exact >
              <Link to="/watchlist">Go to my Watch List</Link>
              <SearchPage handleChange={this.handleChange} handleSubmit={this.handleSubmit} name={this.state.name} movies={this.state.movies} />
              <div>{this.state.movies.map(movie => { return <MovieCard movie={movie} addToWatchList={this.addToWatchList} /> })}</div>
            </Route>

            {/* <Route path='/movies/:id' component={MovieList} /> */}
          </Switch>
        </div>
      </BrowserRouter >

    );
  }
}

