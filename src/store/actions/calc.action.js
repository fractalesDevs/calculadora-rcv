import { calcTypes } from '../types/calc.types';

const { RESULTADO_FINAL } = calcTypes;

export const calcAction = (resultado) => ({
  type: RESULTADO_FINAL,
  resultadoCalculadora: resultado,
});
