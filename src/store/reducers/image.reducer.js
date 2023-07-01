import { imageType } from '../types';

const { TAKE_IMAGE, URL_SETEADA, DATA_GUARDADA, DATA_OBTENIDA, ESTABLECER_NOMBRE } = imageType;

const initialState = {
  url: null,
  seteo: false,
  payload: [],
  data: '',
  nombre: '',
  grabado: false,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_IMAGE:
      return {
        ...state,
        url: action.url,
      };
    case URL_SETEADA:
      return {
        ...state,
        seteo: action.seteo,
      };
    case DATA_GUARDADA:
      return {
        ...state,
        payload: action.payload,
      };
    case DATA_OBTENIDA:
      return {
        ...state,
        data: action.data,
      };
    case ESTABLECER_NOMBRE:
      return {
        ...state,
        nombre: action.nombre,
        grabado: action.grabado,
      };
    default:
      return state;
  }
};

export default imageReducer;
