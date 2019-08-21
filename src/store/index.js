import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

export default (initialState = {}) => {
    const middleware = [
        thunk
    ];

    const enhancers = [
        applyMiddleware(...middleware),
    ];

    const store = createStore(
        reducers,
        initialState,
        compose(...enhancers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

    store.asyncReducers = {};

    return store
}