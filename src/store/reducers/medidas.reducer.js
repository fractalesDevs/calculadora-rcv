import { MEDIDAS } from '../../constants/data/medidas';
import { medidasTypes } from '../types';

const { SELECT_MEDIDAS } = medidasTypes;

const initialState = {
  data: MEDIDAS,
  selected: null,
};

const medidasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MEDIDAS:
      return {
        ...state,
        selected: state.data.find((medida) => medida.id === action.medidaId),
      };
    default:
      return state;
  }
};

export default medidasReducer;
