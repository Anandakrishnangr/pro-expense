import React from 'react';

import AuthNavigator from './src/features/auth/navigator/authNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from './src/features/auth/store/authStore';

function App(): React.JSX.Element {
const {isAuthenticated,logout} =   useAuthStore()
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      {isAuthenticated?<>
    <Text>Logedin</Text>  
    <TouchableOpacity onPress={logout} >
      <Text>
      Logout
      </Text>
      </TouchableOpacity>
      </>
    :
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
      }
    </View>
  );
}

export default App;
