import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomeContainer from '../src/containers/HomeContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/">
                <HomeContainer />
              </Route>
            </Switch>
          </div>
        </Router>
      </div >
    );
  }
}

export default App;
