import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import './Header.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
            </header>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Header);
