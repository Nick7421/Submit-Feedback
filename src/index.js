import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (state = {comments:'',}, action) => {
    if(action.type === "Submit_Feeling_Info") {
        //update this too
        return {...state,...action.payload};
    }
    else if(action.type === "Submit_Understanding_Info"){
        //this will update the current state with the payload
        return {...state,...action.payload};
    }
    else if(action.type === "Submit_Support_Info"){
        //this will update the current state with the payload
        return {...state,...action.payload};
    }
    else if(action.type ==="Submit_Comments_Info")

        return {...state,...action.payload};
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
