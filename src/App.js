import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator className="calculator" />
    );
  }
}

export default App;
