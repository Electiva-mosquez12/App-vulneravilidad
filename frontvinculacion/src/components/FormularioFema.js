import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker, ScrollView, TouchableOpacity } from 'react-native';
import Dropzone from 'react-dropzone';

const FormularioFema = ({ navigation }) => {
  const [direccion, setDireccion] = useState('');
  const [zip, setZip] = useState('');
  const [otrasIdentificaciones, setOtrasIdentificaciones] = useState('');
  const [nombreEdificio, setNombreEdificio] = useState('');
  const [uso, setUso] = useState('');
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [inspector, setInspector] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [files1, setFiles1] = useState([]);
  const [files2, setFiles2] = useState([]);

  const handleNext = () => {
    // Aquí puedes realizar validaciones o enviar los datos a la siguiente parte del formulario
    // Por ahora, solo navegaré a una pantalla ficticia llamada 'FormularioParte2'
   // navigation.navigate('FormularioParte2');
    navigation.navigate('FormularioFema2', {
    direccion,
    zip,
    otrasIdentificaciones,
    nombreEdificio,
    uso,
    latitud,
    longitud,
    inspector,
    fecha,
    hora,
    files1,
    files2,
   });
  };
  
  const handleDrop1 = (acceptedFiles) => {
    setFiles1(acceptedFiles);
    // Puedes realizar lógica adicional con los archivos seleccionados si es necesario
  };

  const handleDrop2 = (acceptedFiles) => {
    setFiles2(acceptedFiles);
    // Puedes realizar lógica adicional con los archivos seleccionados si es necesario
  };
 {/* const handleDocument1 = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      console.log(result);
      // Aquí puedes manejar el resultado, por ejemplo, guardar el URI del documento en el estado
    } catch (error) {
      console.error(error);
    }
  };*/
 }
 {/*
  const handleDocument2 = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      console.log(result);
      // Aquí puedes manejar el resultado, por ejemplo, guardar el URI del documento en el estado
    } catch (error) {
      console.error(error);
    }
  };*/
 }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulario FEMA P-154</Text>
      
      {/* Dos botones para cargar documentos (puedes personalizar según tus necesidades) */}
      <View style={styles.buttonContainer}>
        <Dropzone onDrop={handleDrop1}>
          {({ getRootProps, getInputProps }) => (
            <TouchableOpacity {...getRootProps()} style={styles.documentButton}>
              <input {...getInputProps()} />
              <Text>Cargar Documento 1</Text>
            </TouchableOpacity>
          )}
        </Dropzone>

        <Dropzone onDrop={handleDrop2}>
          {({ getRootProps, getInputProps }) => (
            <TouchableOpacity {...getRootProps()} style={styles.documentButton}>
              <input {...getInputProps()} />
              <Text>Cargar Documento 2</Text>
            </TouchableOpacity>
          )}
        </Dropzone>
      </View>

      {/* Inputs y Select */}
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={direccion}
        onChangeText={(text) => setDireccion(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="ZIP"
        value={zip}
        onChangeText={(text) => setZip(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Otras Identificaciones"
        value={otrasIdentificaciones}
        onChangeText={(text) => setOtrasIdentificaciones(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre del Edificio"
        value={nombreEdificio}
        onChangeText={(text) => setNombreEdificio(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Uso"
        value={uso}
        onChangeText={(text) => setUso(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Latitud"
        value={latitud}
        onChangeText={(text) => setLatitud(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Longitud"
        value={longitud}
        onChangeText={(text) => setLongitud(text)}
      />
      <Picker
        style={styles.input}
        selectedValue={inspector}
        onValueChange={(itemValue) => setInspector(itemValue)}
      >
        <Picker.Item label="Inspector 1" value="inspector1" />
        <Picker.Item label="Inspector 2" value="inspector2" />
        {/* Agrega más opciones según necesites */}
      </Picker>

      {/* Fecha y Hora */}
      <TextInput
        style={styles.input}
        placeholder="Fecha (MM/DD/AAAA)"
        value={fecha}
        onChangeText={(text) => setFecha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora"
        value={hora}
        onChangeText={(text) => setHora(text)}
      />

      {/* Botón Siguiente */}
     {/* <Button title="Siguiente" onPress={handleNext} />*/}
     <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>→</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'white',  // Cambia el color de fondo según tus preferencias
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  documentButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 8,
    cursor: 'pointer',
  },
});

export default FormularioFema;
