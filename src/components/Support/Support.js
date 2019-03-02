import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import '../Feeling/Feeling.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Support extends Component {
    state = {
        support: '',
    }

    handleButtonClick = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.support })
        this.setState({
            support: '',
        })
        this.props.history.push('comments');
    }

    handleChangeFor = event => {
        this.setState({
            support: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>How well did you feel supported today?</h1>
                <br />
                <label htmlFor="support">Support?</label>
                <br />
                <input value={this.state.support} onChange={this.handleChangeFor} id="support" type="number"></input>
                <br />
                <div className="nextButton">
                    <button onClick={this.handleButtonClick}>Next</button>
                </div>
                <br />
                <h2>Review Your Feedback</h2>
                <h3>Feelings: {this.props.feelingsReducer} </h3>
                <h3>Understanding: {this.props.understandingReducer}</h3>
                <h3>Support: {this.props.supportReducer}</h3>
                <h3>Comments: </h3>
                <button type="button" disabled>Incomplete</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Support);
