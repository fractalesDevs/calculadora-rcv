import { createStore, combineReducers } from 'redux';

import { medidasReducer, imageReducer } from './reducers/index';

const rootReducer = combineReducers({
  medidas: medidasReducer,
  image: imageReducer,
});

export default createStore(rootReducer);
