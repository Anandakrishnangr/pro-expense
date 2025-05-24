import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import {  Input ,Link} from '../../../components';
import { styles } from '../../../styles';

const SignupScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleRegisterWithApp = () => {
        // Replace with your registration logic (API call, validation, etc.)
        Alert.alert('Register', `Registered with app:\nName: ${name}\nEmail: ${email}`);
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
            <Link  onPress={handleRegisterWithApp}>
                <Text style={styles.buttonText}>Register with App</Text>
            </Link>
            <Link style={[styles.button, styles.localButton]} onPress={handleRegisterLocally}>
                <Text style={styles.buttonText}>Register & Use Locally</Text>
            </Link>
        </View>
    );
};



export default SignupScreen;