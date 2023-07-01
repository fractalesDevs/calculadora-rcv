import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.backs,
  },
  txtDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    marginVertical: 25,
  },
  dataCalculadora: {
    width: '100%',
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 13.97,

    elevation: 21,
  },
  btnData: {
    flex: 0.5,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  row: {
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  rowBtns: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: COLORS.white,
    backgroundColor: COLORS.secondary,
    padding: 10,
    width: '100%',
    borderRadius: 0,
  },
  input: {
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: COLORS.darkGray,
    height: 60,
  },
  labelBtn: {
    fontSize: 30,
    color: COLORS.secondary,
  },
  contBtnCalc: {
    height: 50,
    marginVertical: 20,
    width: '100%',
    marginHorizontal: 25,
  },
  btnCalcular: {
    backgroundColor: COLORS.button,
    width: '88%',
    height: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  txtCalcular: {
    color: COLORS.white,
    fontSize: 20,
  },
  contResultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtResultado: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 80,
    textAlign: 'center',
  },
  datoCalc: {
    opacity: 1,
  },
  datoCalc1: {
    opacity: 0.1,
  },
});
