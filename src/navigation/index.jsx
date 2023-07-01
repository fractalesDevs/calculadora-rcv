import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import AuthNavigator from './auth';
import TabsNavigator from './tabs';

const Navigation = () => {
  const isLoged = useSelector((state) => state.auth.userId);
  return (
    <NavigationContainer>{isLoged ? <TabsNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export default Navigation;
