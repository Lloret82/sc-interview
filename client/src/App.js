import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/Navbar';
import Note from './components/note';
import PrivateRoute from './components/privateRoute';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/note">
            <Note />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
