import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    //this.getPizzas();
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Feeling} />
        <Route exact path="/understanding" component={Understanding} />
        <Header />
      </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
