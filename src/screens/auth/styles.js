import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../constants/theme/colors';
const { width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backs,
  },
  contForm: {
    backgroundColor: COLORS.white,
    width: width * 0.85,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 13.97,

    elevation: 21,
    alignItems: 'center',
  },
  titForm: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
    color: COLORS.primary,
    marginBottom: 25,
  },
  label: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: COLORS.black,
    marginVertical: 10,
  },
  input: {
    borderColor: COLORS.darkGray,
    borderWidth: 2,
    width: width * 0.65,
    padding: 15,
    fontSize: 20,
    borderRadius: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
  },
  submitContainer: {},
});
