import React, { useEffect, Switch, Redirect } from 'react';
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

  return (<>
    <Router>
      <div>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route exact path='home'>
           <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  </>);
}

export default App;
