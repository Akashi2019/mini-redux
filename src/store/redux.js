export function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState = undefined;
  let currentListeners = [];
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.map((listener) => listener());
  }
  function subscribe(listener) {
    currentListeners.push(listener);
  }

  dispatch({ type: '@INIT/REDUX' });

  return {
    getState,
    dispatch,
    subscribe
  };
}

export function applyMiddleware(...middlewares) {
  return (createStore) => (...args) => {
    const store = createStore(...args);
    let dispatch = store.dispatch;
    const middleApi = {
      getState: store.getState,
      dispatch: dispatch
    };
    const middlewaresChain = middlewares.map((middleware) =>
      middleware(middleApi)
    );
    dispatch = compose(...middlewaresChain)(dispatch);
    return {
      ...store,
      dispatch
    };
  };
}

export function compose(...fns) {
  if (fns.length === 0) {
    return (args) => args;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduce((a, b) => (...args) => a(b(...args)));
}
