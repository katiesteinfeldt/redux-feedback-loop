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
            this.props.dispatch({ type: 'SET_ADMIN', payload: response.data });
        });
    }
 
    render() {
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
