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

const feelingsReducer = (state = feelings, action) => {
    if (action.type === 'SET_FEELINGS') {
        return action.payload;
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
      feelingsReducer
    }),
    applyMiddleware(logger),
);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
