export function createStore(reducer) {
  let currentState = undefined;
  let currentListeners = [];
  function getStore() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.map((listener) => listener());
  }
  function subscribe(listener) {
    currentListeners.push(listener);
  }

  dispatch({type: '@INIT/REDUX'})

  return {
    getStore,
    dispatch,
    subscribe
  };
}
