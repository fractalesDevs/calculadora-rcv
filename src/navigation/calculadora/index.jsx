import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../constants/theme/colors';
import { Calculadora } from '../../screens';

const Stack = createNativeStackNavigator();

const CalculadoraNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Calculadora"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: 'Montserrat-Light',
          fontSize: 25,
        },
      }}>
      <Stack.Screen name="Calculadora" component={Calculadora} />
    </Stack.Navigator>
  );
};

export default CalculadoraNavigator;
