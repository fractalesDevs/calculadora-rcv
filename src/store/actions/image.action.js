import { imageType } from '../types';

const { TAKE_IMAGE, URL_SETEADA, URL_DB } = imageType;

export const takeImage = (url) => ({
  type: TAKE_IMAGE,
  url,
});

export const urlSeteada = (seteo) => ({
  type: URL_SETEADA,
  seteo,
});
