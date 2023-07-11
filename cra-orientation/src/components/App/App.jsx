import React, { useEffect, Switch, Redirect, Component, Fragment } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import HomePage from '../Home/Home';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import './App.css';
import Framework from '../../Framework/Framework';

function App() {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user)

  useEffect(() => {
    dispatch({ type: 'FETCH_USER'})
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <ProtectedRoute exact path='/home'>
           <HomePage/>
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
