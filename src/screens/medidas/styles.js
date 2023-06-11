import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../constants/theme/colors';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backs,
  },
  contImage: {},
  imgSize: {
    width: width * 1,
    height: height * 0.31,
  },
  contTxt: {
    backgroundColor: COLORS.white,
    width: width * 0.9,
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    marginTop: -70,
  },
  title: {
    fontSize: 32,
    color: COLORS.primary,
    paddingVertical: 15,
    fontFamily: 'Montserrat-SemiBold',
  },
  txt: {
    fontSize: 20,
  },
  btn: {
    width: width * 0.9,
    backgroundColor: COLORS.secondary,
    padding: 30,
    marginTop: 25,
    alignItems: 'center',
    borderRadius: 20,
  },
  txtBtn: {
    fontSize: 20,
    color: COLORS.white,
  },
  scrollCont: {
    flex: 1,
    paddingBottom: 30,
  },
  scrollCont2: {
    alignItems: 'center',
  },
});
