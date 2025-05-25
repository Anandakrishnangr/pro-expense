import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Input, Link} from '../../../components';
import {styles} from '../../../styles';
import {useAuth} from '../hooks/useAuth';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signUp} = useAuth();
  const handleRegisterWithApp = async () => {
    // Replace with your registration logic (API call, validation, etc.)
    const response = await signUp(email, password, name);
    console.log('Registration response:', response);
    Alert.alert(
      'Register',
      `Registered with app:\nName: ${name}\nEmail: ${email}`,
    );
  };

  const handleRegisterLocally = () => {
    // Replace with your local registration logic (store locally, etc.)
    Alert.alert('Register Locally', `Registered locally:\nName: ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Input
        placeholder="Name"
        value={name}
        autoCapitalize="words"
        onChangeText={setName}
      />
      <Input
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Link onPress={handleRegisterWithApp}>
        <Text style={styles.buttonText}>Register with App</Text>
      </Link>
      <Link
        style={[styles.button, styles.localButton]}
        onPress={handleRegisterLocally}>
        <Text style={styles.buttonText}>Register & Use Locally</Text>
      </Link>
    </View>
  );
};

export default SignupScreen;
