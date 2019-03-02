import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thanks extends Component {

    render() {
        return (
            <div>
                <h1>Thank you!</h1>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Thanks);
