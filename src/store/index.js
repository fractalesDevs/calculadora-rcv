import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { medidasReducer, imageReducer } from './reducers/index';

const rootReducer = combineReducers({
  medidas: medidasReducer,
  image: imageReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
