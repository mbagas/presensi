import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '../screens';
import MainContainer from './MainContainer';
import { IStackScreen } from '../utils/interfaces';

const AuthStack: React.FC = () => {
  const Stack = createNativeStackNavigator<IStackScreen>();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainApp" component={MainContainer} />
    </Stack.Navigator>
  );
};

export default AuthStack;
