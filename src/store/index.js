import { createStore, applyMiddleware } from './redux';
import thunk from './thunk';
import logger from './logger';

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
  countReducer,
  applyMiddleware(logger, thunk)
);

export default store;
