import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  const [formState, setFormState] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    sexo: '',
    birthdayDay: '',
    birthdayMonth: '',
    birthdayYear: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Registro</Text>
        <TextInput
          name="cedula"
          placeholder="Cédula"
          style={styles.input}
          value={formState.cedula}
          onChangeText={(text) => handleChange('cedula', text)}
        />
        <TextInput
          name="nombre"
          placeholder="Nombre"
          style={styles.input}
          value={formState.nombre}
          onChangeText={(text) => handleChange('nombre', text)}
        />
        <TextInput
          name="apellido"
          placeholder="Apellido"
          style={styles.input}
          value={formState.apellido}
          onChangeText={(text) => handleChange('apellido', text)}
        />
        <TextInput
          name="email"
          placeholder="Email"
          style={styles.input}
          value={formState.email}
          onChangeText={(text) => handleChange('email', text)}
        />
        <TextInput
          name="telefono"
          placeholder="Teléfono"
          style={styles.input}
          value={formState.telefono}
          onChangeText={(text) => handleChange('telefono', text)}
        />
        <Picker
          selectedValue={formState.sexo}
          onValueChange={(value) => handleChange('sexo', value)}
          style={styles.picker}
        >
          <Picker.Item label="Selecciona el sexo" value="" />
          <Picker.Item label="Masculino" value="masculino" />
          <Picker.Item label="Femenino" value="femenino" />
        </Picker>
        <View style={styles.birthdayContainer}>
          <TextInput
            name="birthdayDay"
            placeholder="Día"
            style={styles.birthdayInput}
            value={formState.birthdayDay}
            onChangeText={(text) => handleChange('birthdayDay', text)}
          />
          <TextInput
            name="birthdayMonth"
            placeholder="Mes"
            style={styles.birthdayInput}
            value={formState.birthdayMonth}
            onChangeText={(text) => handleChange('birthdayMonth', text)}
          />
          <TextInput
            name="birthdayYear"
            placeholder="Año"
            style={styles.birthdayInput}
            value={formState.birthdayYear}
            onChangeText={(text) => handleChange('birthdayYear', text)}
          />
        </View>
        <TextInput
          name="username"
          placeholder="Usuario"
          style={styles.input}
          value={formState.username}
          onChangeText={(text) => handleChange('username', text)}
        />
        <TextInput
          name="password"
          placeholder="Contraseña"
          secureTextEntry
          style={styles.input}
          value={formState.password}
          onChangeText={(text) => handleChange('password', text)}
        />
        <TextInput
          name="confirmPassword"
          placeholder="Confirmar contraseña"
          secureTextEntry
          style={styles.input}
          value={formState.confirmPassword}
          onChangeText={(text) => handleChange('confirmPassword', text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <MaterialCommunityIcons size={24} color="white" />
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff', // Cambiar al color deseado
    },
    formContainer: {
      width: '80%',
      maxWidth: 400,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 10,
    },
    picker: {
      height: 40,
      marginBottom: 16,
      borderColor: 'gray',
      borderWidth: 1,
    },
    birthdayContainer: {
      flexDirection: 'column',  // Cambiado a 'column' para apilar verticalmente
      marginBottom: 16,
    },
    birthdayInputs: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    birthdayInput: {
      flex: 1,
      height: 40,
      marginBottom: 8,
      marginRight: 0,  // Ajustado para que no haya margen a la derecha
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#001f3f', // Cambiar al color deseado
      padding: 10,
      borderRadius: 5,
      marginTop: 16,
    },
    buttonText: {
      color: 'white',
      marginLeft: 120,
      textAlign: 'center',
    },
  });

export default Register;
