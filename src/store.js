import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './indexRootReducer';
import  { rootSaga } from   './indexRootSaga';

const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    createLogger(),
  ),
);

sagaMiddleware.run(rootSaga);

export { store, }