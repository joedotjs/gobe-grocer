import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

export default createStore((state = { items: [] }, action) => {

    let newState = Object.assign({}, state);

    switch (action.type) {

        case 'SET_ITEMS':
            newState.items = action.items;
            break;

        default:
            return state;

    }

    return newState;

}, applyMiddleware(createLogger()));