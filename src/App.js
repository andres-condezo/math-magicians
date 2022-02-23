import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <NavBar />
        <section className="content">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/Calculator"
              element={<Calculator className="calculator" />}
            />
            <Route
              path="/Quote"
              element={<Quote />}
            />
          </Routes>
        </section>
      </Router>
    );
  }
}

export default App;
