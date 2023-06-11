import { imageType } from '../types';

const { TAKE_IMAGE, URL_SETEADA } = imageType;

const initialState = {
  url: null,
  seteo: false,
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
    default:
      return state;
  }
};

export default imageReducer;
