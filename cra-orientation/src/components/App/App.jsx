import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import HomePage from '../Home/Home';
import LoginPage from '../LoginPage/LoginPage'
import RegistrationPage from '../RegisterPage/RegisterPage'


import './App.css';


function MyApp() {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user)

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' })
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/home'>
            <HomePage />
          </Route>
          <Route exact path='/'>
            <LoginPage />
          </Route>
          <Route exact path='/registration'>
            <RegistrationPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MyApp;
