import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

    state = {
      feelings: '',
    }

  componentDidMount() {
    //this.getPizzas();
  }

  handleButtonClick = () => {
    console.log('button was clicked');
    this.props.dispatch({type: 'SUBMIT_FEELINGS', payload: this.state.feelings})
  }

  handleChangeFor = (event) => {
    console.log(event.target.value);
    this.setState({
      feelings: event.target.value,
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <div>
          <h1>How are you feeling today?</h1>
          <br />
          <label for="feeling">Feeling?</label>
          <br />
          <input onChange={this.handleChangeFor} id="feeling" type="number"></input>
          <br />
          <div className="nextButton">
            <button onClick={this.handleButtonClick}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);
