// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableWithoutFeedback,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Implement your authentication logic here
    // Check if the login credentials are correct

    // For example, check if the email and password match for a student
    if (email === 'user@gmail.com' && password === 'root') {
      navigation.replace('HomeScreen');
    } else if (email === 'faculty@gmail.com' && password === 'admin') {
      // Check if the email and password match for a faculty
      navigation.replace('FacultyHome');
    } else {
      // Invalid credentials, show an alert
      Alert.alert('Invalid Credentials', 'Please enter valid email and password.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>KSRM CONNECT APP</Text>
      <View style={styles.box}>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Email"
            value={email}
            autoCapitalize="none"
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Password"
            value={password}
            autoCapitalize="none"
            onChangeText={setPassword}
            secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
            style={styles.input}
          />
          <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
            <Icon
              name={showPassword ? 'eye-slash' : 'eye'}
              size={20}
              color="#888"
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </View>
        <Button title="Login" onPress={handleLogin} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1', // Matte background color
  },
  box: {
    width: '80%', // Adjust the width as needed
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7', // Matte border color
  },
  icon: {
    marginRight: 10,
    color: '#34495e', // Matte icon color
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: '#2c3e50', // Matte text color
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db', // Set your desired button color
    padding: 10,
    borderRadius: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },
});
 
export default LoginScreen;
