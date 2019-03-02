import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feelings = [];
const understanding = [];
const support = [];
const comments = [];
const admin = [];

const feelingsReducer = (state = feelings, action) => {
    if (action.type === 'SET_FEELINGS') {
        return action.payload;
    }
    else return state;
}

const understandingReducer = (state = understanding, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    else return state;
}

const supportReducer = (state = support, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    else return state;
}

const commentsReducer = (state = comments, action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    else return state;
}

const adminReducer = (state = admin, action) => {
    if (action.type === 'SET_ADMIN') {
        return action.payload;
    }
    else return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
        adminReducer,
    }),
    applyMiddleware(logger),
);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
