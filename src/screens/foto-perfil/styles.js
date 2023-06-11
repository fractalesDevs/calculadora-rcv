import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../constants/theme/colors';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
    backgroundColor: COLORS.backs,
  },
  btn: {
    width: width * 0.8,
  },
  img: {
    width: width * 0.75,
    height: height * 0.35,
    borderRadius: 200,
    backgroundColor: COLORS.white,
    marginBottom: 60,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: COLORS.primary,
    marginBottom: 40,
  },
});
