import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../constants/theme/colors';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    width: width * 0.85,
    alignItems: 'center',
    height: height * 0.3,
    borderWidth: 1,
    marginVertical: 25,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: COLORS.primary,
  },
  txtDesc: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.secondary,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
