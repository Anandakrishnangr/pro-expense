// features/auth/navigation/AuthNavigator.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import {Layout} from '../layout';
import {Text, View} from 'react-native';

export type SettingsStackParamList = {
  Settings: undefined;
};

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

export const SettingsNavigator: React.FC = () =>  {
  return (
    <View>
      <Text>hello</Text>
      <SettingsStack.Navigator
      initialRouteName="Settings"
      screenOptions={{headerShown: false}}
      screenLayout={Layout}>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
    </View>
  );
}
