import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../Home/Home';
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

  return (<>
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route exact path='home'>
            {/* this is the home page for handling questions. */}
          </Route>
        </Switch>
      </div>
    </Router>
  </>);
}

export default App;
