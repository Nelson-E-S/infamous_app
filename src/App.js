import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/user/:userID" component={UserCard} />
            <Redirect to="/" />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
