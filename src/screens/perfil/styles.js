import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: COLORS.backs,
    alignItems: 'center',
  },
  btnPerfil: {
    width: '95%',
    height: '12%',
    textAlignVertical: 'center',
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    fontFamily: 'Montserrat-Bold',
    borderRadius: 7,
  },
  btnPerfil2: {
    width: '95%',
    height: '12%',
    textAlignVertical: 'center',
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
    fontFamily: 'Montserrat-Bold',
    borderRadius: 7,
  },
  btnPerfil3: {
    width: '95%',
    height: '12%',
    textAlignVertical: 'center',
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
    fontFamily: 'Montserrat-Bold',
    borderRadius: 7,
  },
  txtBtnPer: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Light',
    fontSize: 18,
  },
  contFotoPer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  foto: {
    width: '65%',
    height: 250,
    alignContent: 'center',
    borderRadius: 125,
  },
  input: {
    width: '90%',
    borderColor: COLORS.darkGray,
    borderWidth: 1,
  },
  nombre: {
    fontSize: 35,
    marginBottom: 25,
    color: COLORS.primary,
  },
});
