import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

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
    <div className="App">
      <h1>CodeChecker</h1>
      <p>This is where framework type componnent will be</p>
      <Framework/>
    </div>
          <p>This is where difficulty component will be</p>
          {/* this will be a component that will toggle with the solution to the problem given. */ }
  <p>Here i will have a text box for the question to be displayed</p>
  </>);
}

export default App;
