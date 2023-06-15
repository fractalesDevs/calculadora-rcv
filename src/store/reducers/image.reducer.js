import { imageType } from '../types';

const { TAKE_IMAGE, URL_SETEADA, URL_DB } = imageType;

const initialState = {
  url: null,
  seteo: false,
  seturl: null,
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
    case URL_DB:
      return {
        ...state,
        seturl: action.seturl,
      };
    default:
      return state;
  }
};

export default imageReducer;
