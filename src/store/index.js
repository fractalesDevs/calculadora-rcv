import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { medidasReducer, imageReducer, authReducer, calcReducer } from './reducers/index';

const rootReducer = combineReducers({
  medidas: medidasReducer,
  image: imageReducer,
  auth: authReducer,
  calc: calcReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
