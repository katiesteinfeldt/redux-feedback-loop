import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Admin extends Component {

    componentDidMount = () => {
        this.getFeedback();
    }
       getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log(response.data);
            // response.data will be the array of feedback
            // this.props.dispatch({ type: 'SET_ARTIST', payload: response.data });
        });
    }
 
    render() {
        console.log(this.props.feelingsReducer);
        return (
            <div>
                <h1>Admin Portal</h1>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Admin);
