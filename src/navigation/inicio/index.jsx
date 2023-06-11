import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../constants/theme/colors';
import { Inicio, FotoPerfil } from '../../screens';

const Stack = createNativeStackNavigator();

const InicioNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
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
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="FotoPerfil" component={FotoPerfil} />
    </Stack.Navigator>
  );
};

export default InicioNavigator;
