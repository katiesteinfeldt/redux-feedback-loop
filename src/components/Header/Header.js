import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import './Header.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header-title">Prime Daily Feedback</h1>
            </header>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Header);
