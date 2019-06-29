import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/home_page';

class App extends Component {
  render() {
    return (
      <Route exact path="/" component={HomePage} />
    )
  }
}

export default App;