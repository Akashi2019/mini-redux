import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

function countReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    case 'MINUS':
      return state - action.payload;
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    count: countReducer
  }),
  applyMiddleware(logger, thunk)
);

export default store;
