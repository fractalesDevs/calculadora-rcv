import { medidasTypes } from '../types/medidas.type';

const { SELECT_MEDIDAS } = medidasTypes;

export const selectMedidas = (id) => ({
  type: SELECT_MEDIDAS,
  medidaId: id,
});
