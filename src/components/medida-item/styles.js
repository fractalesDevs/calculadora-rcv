import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../constants/theme/colors';
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    width: width * 0.8,
    borderRadius: 10,
    height: height * 0.07,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  txt: {
    fontSize: 22,
    color: COLORS.white,
    fontFamily: 'Montserrat-Light',
  },
});
