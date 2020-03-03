import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import ItemPage from './components/ItemPage';
import WantToReadPage from './components/WantToReadPage';
import DidReadPage from './components/DidReadPage';
import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path='/'>
        <SearchPage />
      </Route>
      <Route path='/want-to-read'>
        <WantToReadPage />
      </Route>
      <Route path='/books-I-red'>
        <DidReadPage />
      </Route>
      <Route path='/book/:id'>
        <ItemPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
