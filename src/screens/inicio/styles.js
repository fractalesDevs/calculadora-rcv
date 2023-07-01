import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../constants/theme/colors';

const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backs,
    paddingBottom: 30,
  },
  btnPerfil: {
    width: '100%',
    height: '9%',
    textAlignVertical: 'center',
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    flexDirection: 'row',
  },
  txtBtnPer: {
    color: COLORS.white,
    fontSize: 20,
    marginHorizontal: 20,
    flex: 0.9,
  },
  logoInicio: {
    width: 250,
    height: 90,
    marginLeft: 65,
  },
  contBlanco: {
    width: '88%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
    marginHorizontal: 25,
    padding: 20,
    marginVertical: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  titInicio: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    color: COLORS.secondary,
  },
  txtInicio: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
  fotoHome: {
    height: 50,
    flex: 0.15,
    marginHorizontal: 15,
  },
  fotoHomeMin: {
    width: width * 0.13,
    height: 50,
    borderRadius: 50,
  },
});
