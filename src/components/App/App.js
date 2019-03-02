import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

    state = {
      feelings: '',
    }

  componentDidMount() {
    //this.getPizzas();
  }

  handleButtonClick = event => {
    event.preventDefault();
    this.props.dispatch({type: 'SUBMIT_FEELINGS', payload: this.state.feelings})
    this.setState({
      feelings: '',
    })
  }

  handleChangeFor = event => {
    this.setState({
      feelings: event.target.value,
    })
  }

  render() {
    console.log(this.props.feelingsReducer);

    return (
      <div className="App">
        <Header />
        <div>
          <h1>How are you feeling today?</h1>
          <br />
          <label for="feeling">Feeling?</label>
          <br />
          <input value={this.state.feelings} onChange={this.handleChangeFor} id="feeling" type="number"></input>
          <br />
          <div className="nextButton">
            <button onClick={this.handleButtonClick}>Next</button>
          </div>
          <br /> 
          <h2>Review Your Feedback</h2>
          <h3>Feelings: </h3>
          <h3>Understanding: </h3>
          <h3>Support: </h3>
          <h3>Comments: </h3>
          <button type="button" disabled>Incomplete</button>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
