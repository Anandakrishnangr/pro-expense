import React from 'react';
import AuthNavigator from './src/features/auth/navigator/authNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, View} from 'react-native';
import {useAuthStore} from './src/features/auth/store/authStore';
import {ApolloProvider} from '@apollo/client';
import client from './src/lib/apolloClient.config';
import DashNavigator from './src/features/dashboard/navigator/dashNavigator';
import {ThemeProvider} from './src/features';

function App(): React.JSX.Element {
  const {isAuthenticated} = useAuthStore();
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'green'}}>
          <NavigationContainer>
            {isAuthenticated ? (
              <>
                <DashNavigator />
              </>
            ) : (
              <AuthNavigator />
            )}
          </NavigationContainer>
        </SafeAreaView>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
