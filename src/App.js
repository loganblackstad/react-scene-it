import React from 'react';
import './App.css';
// import MovieCard from './components/MovieCard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './components/MovieList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MovieList} />
          {/* <Route path="/movies/:id" component={MovieCard} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
