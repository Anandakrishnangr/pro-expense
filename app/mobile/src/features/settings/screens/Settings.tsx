import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useAuthStore} from '../../auth/store/authStore';
import Nav from '../../../components/nav/nav';
import {useTheme} from '../../theme/hooks/useTheme';
import {ThemeSwitch} from '../../../components/ThemeSwitch';

const Settings: React.FC = () => {
  const {signout} = useAuthStore();
  const {setselectedTheme, selectedTheme, colors} = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      color: colors.text,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
    },
  });
  const changeTheme = () => {
    console.log(selectedTheme);
    setselectedTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <ThemeSwitch />
        <TouchableOpacity onPress={changeTheme}>
          <Text>Theme {selectedTheme}</Text>
        </TouchableOpacity>
        <Text>Logedin</Text>
        <TouchableOpacity onPress={signout}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <Nav />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
