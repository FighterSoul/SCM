import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Image
        source={require('../assets/login.png')} // Add your image to the assets folder
        style={styles.image}
      />
      <Text style={styles.label}>Your Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.forgotPassword} onPress={() => alert('Forgot Password')}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkContainer} onPress={() => Linking.openURL('http://example.com')}>
        <Text style={styles.linkText}>Want to know more? <Text style={styles.link}>Click this Link</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 10,
    color: '#333',
    fontSize: 16,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 30,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#003366',
  },
  button: {
    backgroundColor: '#003366',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  linkContainer: {
    marginTop: 20,
  },
  linkText: {
    color: '#333',
  },
  link: {
    color: '#003366',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
