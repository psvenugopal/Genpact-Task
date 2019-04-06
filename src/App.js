import React, { Component } from 'react';
import './App.css';
import Filters from './Components/Filters';
import Users from './Components/Users';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: 'center' }}>Employee Details</h1>
        <Filters />
        <Users />
      </React.Fragment>
    );
  }
}

export default App;
