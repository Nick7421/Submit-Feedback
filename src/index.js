import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
    if(action.type === "Submit_Feeling_Info") {
        //update this too
        return {...state,...action.payload};
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feedback,
    }),
    applyMiddleware(logger),
);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
