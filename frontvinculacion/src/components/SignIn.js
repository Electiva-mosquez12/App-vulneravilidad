import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


const SignIn = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Handle form submission logic here
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="description" size={60} color="white" style={styles.icon} />
      <View style={styles.paper}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Bienvenido</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <Text style={styles.forgotLink} onPress={() => navigation.navigate('ForgotUsername')}>
            Forgot your username?
          </Text>
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
          <Text style={styles.forgotLink} onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot your password?
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <MaterialCommunityIcons name="lock-open" size={24} color="white" />
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001f3f',
  },
  icon: {
    marginBottom: 20, // Ajuste para reducir la separación entre el ícono y el contenedor blanco
  },

  paper: {
    padding: 20,
    width: '80%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderColor: '#001f3f',
    borderWidth: 2,
    borderRadius: 10,
  },
  headingContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forgotLink: {
    color: '#001f3f',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#001f3f',
    padding: 10,
    borderRadius: 5,
    marginTop: 24,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default SignIn;
