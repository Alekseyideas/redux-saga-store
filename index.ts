import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './rootReducer';
import sagas from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose()(createStore);

const composeEnhancers = composeWithDevTools({});

const store = createStoreWithMiddleware(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

export default store;
