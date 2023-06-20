import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  btnPerfil: {
    width: '60%',
    height: '45%',
    textAlignVertical: 'center',
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 15,
  },
  txtBtnPer: {
    color: COLORS.white,
  },
  contFotoPer: {
    width: '40%',
  },
  foto: {
    width: '75%',
    height: 100,
    alignContent: 'center',
    borderRadius: 50,
  },
});
