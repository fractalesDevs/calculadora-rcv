import { createStore, combineReducers } from 'redux';

import { medidasReducer } from './reducers/index';

const rootReducer = combineReducers({
  medidas: medidasReducer,
});

export default createStore(rootReducer);
