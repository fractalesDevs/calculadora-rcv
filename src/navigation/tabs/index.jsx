import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';

import { COLORS } from '../../constants/theme/colors';
import CalculadoraNavigator from '../calculadora';
import InicioNavigator from '../inicio';
import PrevencionNavigator from '../med-prevencion';

const TabBottom = createBottomTabNavigator();

const TabsNavigator = () => {
  const { width, height } = Dimensions.get('screen');
  return (
    <TabBottom.Navigator
      initialRouteName="InicioTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          height: height * 0.12,
        },
        tabBarLabelStyle: {
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 15,
        },
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarIconStyle: {
          fontSize: 40,
        },
      }}>
      <TabBottom.Screen
        name="InicioTab"
        component={InicioNavigator}
        options={{
          tabBarLabel: 'INICIO',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <TabBottom.Screen
        name="PrevencionTab"
        component={PrevencionNavigator}
        options={{
          tabBarLabel: 'PREVENCIÓN',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'alert-circle' : 'alert-circle-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <TabBottom.Screen
        name="CalculadoraTab"
        component={CalculadoraNavigator}
        options={{
          tabBarLabel: 'CALCULAR',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'medkit' : 'medkit-outline'} size={size} color={color} />
          ),
        }}
      />
    </TabBottom.Navigator>
  );
};

export default TabsNavigator;
