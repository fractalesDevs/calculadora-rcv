import { calcTypes } from '../types/calc.types';

const { RESULTADO_FINAL } = calcTypes;

const initialState = {
  resultadoCalculadora: '',
};

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESULTADO_FINAL:
      return {
        ...state,
        resultadoCalculadora: action.resultadoCalculadora,
      };
    default:
      return state;
  }
};

export default calcReducer;
