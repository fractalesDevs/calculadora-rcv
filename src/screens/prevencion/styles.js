import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../constants/theme/colors';
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  scrollCont: {
    flex: 1,
    backgroundColor: '#DCE9FF',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: -15,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingTop: 45,
    paddingBottom: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titMedidas: {
    fontSize: 20,
    marginVertical: 30,
    paddingHorizontal: 35,
    fontFamily: 'Montserrat-Regular',
    color: COLORS.primary,
  },
  logoMed: {
    width: width * 0.75,
    height: 70,
  },
});
