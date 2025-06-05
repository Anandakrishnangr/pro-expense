import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useAuthStore} from '../../auth/store/authStore';
import Nav from '../../../components/nav/nav';

const DashBoard: React.FC = () => {
  const {signout} = useAuthStore();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      {/* Add your dashboard content here */}
      <Text>Logedin</Text>
      <TouchableOpacity onPress={signout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <Nav />
    </View>
  );
};

export default DashBoard;
