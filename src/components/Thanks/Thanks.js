import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thanks extends Component {

    newFeedback = () => {
        console.log('new feedback was clicked');
    }

    render() {
        return (
            <div>
                <h1>Thank you!</h1>
                <br />
                <button onClick={this.newFeedback}>Leave New Feedback</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Thanks);
