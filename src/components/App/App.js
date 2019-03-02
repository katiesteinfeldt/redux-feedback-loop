import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    //this.getPizzas();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/thanks" component={Thanks} />
          
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
