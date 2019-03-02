import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import '../Feeling/Feeling.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Feeling extends Component {
    state = {
        feelings: '',
    }

    handleButtonClick = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_FEELINGS', payload: this.state.feelings })
        this.setState({
            feelings: '',
        })
        this.props.history.push('understanding');
    }

    handleChangeFor = event => {
        this.setState({
            feelings: event.target.value,
        })
    }

    render() {
        console.log(this.props.feelingsReducer);
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <br />
                <label htmlFor="feeling">Feeling?</label>
                <br />
                <input value={this.state.feelings} onChange={this.handleChangeFor} id="feeling" type="number"></input>
                <br />
                <div className="nextButton">
                    <button onClick={this.handleButtonClick}>Next</button>
                </div>
                <br />
                <h2>Review Your Feedback</h2>
                <h3>Feelings: {this.props.feelingsReducer} </h3>
                <h3>Understanding: </h3>
                <h3>Support: </h3>
                <h3>Comments: </h3>
                <button type="button" disabled>Incomplete</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Feeling);
