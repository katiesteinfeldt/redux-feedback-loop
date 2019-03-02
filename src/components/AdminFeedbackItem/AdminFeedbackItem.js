import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdminFeedbackItem extends Component {


    render() {
        return (
            <div>
                <div>
                    <p>{this.props.feedback.support}</p>
                </div>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(AdminFeedbackItem);