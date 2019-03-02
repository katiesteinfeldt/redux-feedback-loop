import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';


class Review extends Component {
    
    handleButtonClick = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'SUBMIT_FEEDBACK', payload: event })
    }



    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
                <h3>Feelings: {this.props.feelingsReducer} </h3>
                <h3>Understanding: {this.props.understandingReducer}</h3>
                <h3>Support: {this.props.supportReducer} </h3>
                <h3>Comments: {this.props.commentsReducer} </h3>
                <button type="button">Submit</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Review);