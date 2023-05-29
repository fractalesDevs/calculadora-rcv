import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titMedidas: {
    fontSize: 20,
    marginVertical: 20,
    fontFamily: 'Montserrat-Bold',
    color: COLORS.primary,
  },
});
