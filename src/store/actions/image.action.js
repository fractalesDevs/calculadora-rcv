import { imageType } from '../types';

const { TAKE_IMAGE, URL_SETEADA, DATA_GUARDADA, DATA_OBTENIDA, ESTABLECER_NOMBRE } = imageType;

export const takeImage = (url) => ({
  type: TAKE_IMAGE,
  url,
});

export const urlSeteada = (seteo) => ({
  type: URL_SETEADA,
  seteo,
});

export const dataGuardada = (payload) => ({
  type: DATA_GUARDADA,
  payload,
});

export const dataObtenida = (data) => ({
  type: DATA_OBTENIDA,
  data,
});

export const establecerNombre = (nombre, grabado) => ({
  type: ESTABLECER_NOMBRE,
  nombre,
  grabado,
});
