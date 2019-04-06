import { createStore, compose, applyMiddleware } from 'redux';
import employeeReducer from './Reducers/Reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(employeeReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;