import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../constants/theme/colors';
import { Prevencion, Medidas, Medida } from '../../screens';

const Stack = createNativeStackNavigator();

const PrevencionNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Prevencion"
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
      <Stack.Screen name="Prevencion" component={Prevencion} />
      <Stack.Screen
        name="Medidas"
        options={({ route }) => ({
          title: route.params.name,
        })}
        component={Medidas}
      />
    </Stack.Navigator>
  );
};

export default PrevencionNavigator;
