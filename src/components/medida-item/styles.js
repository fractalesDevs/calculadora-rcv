import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../constants/theme/colors';
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    width: width * 0.88,
    borderRadius: 10,
    height: height * 0.13,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  txt: {
    fontSize: 30,
    color: COLORS.white,
  },
});
