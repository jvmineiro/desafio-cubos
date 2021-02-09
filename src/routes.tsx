import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieInfo from './pages/MovieInfo';

const Routes = () => (
  <BrowserRouter>
    <Route component={MovieList} exact path="/" />
    <Route component={MovieInfo} path="/info/:id" />
  </BrowserRouter>
);

export default Routes;
