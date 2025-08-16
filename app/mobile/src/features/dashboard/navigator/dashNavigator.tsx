// features/auth/navigation/AuthNavigator.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoard from '../screens/DashBoard';
import { Layout } from '../layout';

export type AuthStackParamList = {
  Dashboard: undefined;
};

const DashStack = createNativeStackNavigator<AuthStackParamList>();

export default function DashNavigator() {
  return (
    <DashStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}
      screenLayout={Layout}>
      <DashStack.Screen name="Dashboard" component={DashBoard} />
    </DashStack.Navigator>
  );
}
