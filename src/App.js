import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import GlobalStyles from './globalStyles';

import SearchPage from './pages/SearchPage';
import ItemPage from './pages/ItemPage';
import WantToReadPage from './pages/WantToReadPage';
import Reading from './pages/Reading';
import DidReadPage from './pages/DidReadPage';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <SearchPage />
        </Route>
        <Route path='/want-to-read'>
          <WantToReadPage />
        </Route>
        <Route path='/reading'>
          <Reading />
        </Route>
        <Route path='/books-I-read'>
          <DidReadPage />
        </Route>
        <Route path='/book/:id'>
          <ItemPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
    <GlobalStyles />
  </Provider>
);

export default App;
