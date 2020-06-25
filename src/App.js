import React from 'react';
import './App.css';

// import MovieList from './components/MovieList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';


// set up react router --> look @ code kitchen



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact component={SearchPage} />
          {/* <Route path='/movies/:id' component={MovieList} /> */}
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
