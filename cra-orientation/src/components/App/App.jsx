import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import HomePage from '../Home/Home';


import './App.css';


function MyApp() {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user)

  useEffect(() => {
    dispatch({ type: 'FETCH_USER'})
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/home'>
           <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MyApp;
