import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

   

  componentDidMount() {
    //this.getPizzas();
  }

 

  render() {
    console.log(this.props.feelingsReducer);

    return (
      <div className="App">
        <Header />
        <Feeling />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
