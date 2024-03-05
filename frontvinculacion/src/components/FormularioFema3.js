import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const FormularioFema3 = ({ route, navigation }) => {
  // Obtener datos de las pantallas anteriores
  const { params } = route;
  const {
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
    numPisos,
    sup,
    info,
    anioConstruccion,
    areaTotalPiso,
    anioCodigo,
    anioConstruccion2,
    ampliacion,
    ocupacion,
    tipoSuelo,
    comentario,
  } = params;

  //Console.log("help:" , params);

  // Estados para los campos del FormularioParte3
  const [tipoIdentificacionDNK, setTipoIdentificacionDNK] = useState('');
  const [resultadoBase, setResultadoBase] = useState('');
  const [irregularidadVerticalSevera, setIrregularidadVerticalSevera] = useState('');
  const [irregularidadVerticalModerada, setIrregularidadVerticalModerada] = useState('');
  const [plantaIrregular, setPlantaIrregular] = useState('');
  const [preCodigoSismico, setPreCodigoSismico] = useState('');
  const [postCodigoSismico, setPostCodigoSismico] = useState('');
  const [sueloTipoAoB, setSueloTipoAoB] = useState('');
  const [sueloTipoE1_3Pisos, setSueloTipoE1_3Pisos] = useState('');
  const [sueloTipoE_GT3Pisos, setSueloTipoE_GT3Pisos] = useState('');
  const [resultadoMinimoSmin, setResultadoMinimoSmin] = useState('');
  const [resultadoFinalSL1_GT_Smin, setResultadoFinalSL1_GT_Smin] = useState('');

  const handleNext = () => {
    // Puedes realizar validaciones o enviar los datos a la siguiente parte del formulario
    // Por ahora, solo navegaré a una pantalla ficticia llamada 'FormularioParte4'
    navigation.navigate('FormularioFema4', {
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
      numPisos,
      sup,
      info,
      anioConstruccion,
      areaTotalPiso,
      anioCodigo,
      anioConstruccion2,
      ampliacion,
      ocupacion,
      tipoSuelo,
      comentario,
      tipoIdentificacionDNK,
      resultadoBase,
      irregularidadVerticalSevera,
      irregularidadVerticalModerada,
      plantaIrregular,
      preCodigoSismico,
      postCodigoSismico,
      sueloTipoAoB,
      sueloTipoE1_3Pisos,
      sueloTipoE_GT3Pisos,
      resultadoMinimoSmin,
      resultadoFinalSL1_GT_Smin,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulario FEMA P-154</Text>
      <Text style={styles.subtitle}>Resultado base, modificadores y resultado final del nivel 1 de análisis, SL1</Text>

      {/* Selects */}
      <Picker
        style={styles.input}
        selectedValue={tipoIdentificacionDNK}
        onValueChange={(itemValue) => setTipoIdentificacionDNK(itemValue)}
      >
        <Picker.Item label="Tipo de identificación DNK: Sup" value="sup" />
        <Picker.Item label="Tipo de identificación DNK: Inf" value="inf" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={resultadoBase}
        onValueChange={(itemValue) => setResultadoBase(itemValue)}
      >
        <Picker.Item label="Resultado base: Sup" value="sup" />
        <Picker.Item label="Resultado base: Inf" value="inf" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={irregularidadVerticalSevera}
        onValueChange={(itemValue) => setIrregularidadVerticalSevera(itemValue)}
      >
        {/* Agrega más opciones según sea necesario */}
        <Picker.Item label="Irregularidad vertical severa: Sup" value="sup" />
        <Picker.Item label="Irregularidad vertical severa: Inf" value="inf" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={irregularidadVerticalModerada}
        onValueChange={(itemValue) => setIrregularidadVerticalModerada(itemValue)}
      >
        <Picker.Item label="Irregularidad vertical moderada: Sup" value="sup" />
        <Picker.Item label="Irregularidad vertical moderada: Inf" value="inf" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={plantaIrregular}
        onValueChange={(itemValue) => setPlantaIrregular(itemValue)}
      >
        <Picker.Item label="Planta irregular: Sup" value="sup" />
        <Picker.Item label="Planta irregular: Inf" value="inf" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={preCodigoSismico}
        onValueChange={(itemValue) => setPreCodigoSismico(itemValue)}
      >
        <Picker.Item label="Pre- código sísmico: Sup" value="sup" />
        <Picker.Item label="Pre- código sísmico: Inf" value="inf" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={postCodigoSismico}
        onValueChange={(itemValue) => setPostCodigoSismico(itemValue)}
      >
        <Picker.Item label="Post- código sísmico: Sup" value="sup" />
        <Picker.Item label="Post- código sísmico: Inf" value="inf" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={sueloTipoAoB}
        onValueChange={(itemValue) => setSueloTipoAoB(itemValue)}
      >
        <Picker.Item label="Suelo tipo A o B: Sup" value="sup" />
        <Picker.Item label="Suelo tipo A o B: Inf" value="inf" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={sueloTipoE1_3Pisos}
        onValueChange={(itemValue) => setSueloTipoE1_3Pisos(itemValue)}
      >
        <Picker.Item label="Suelo tipo E (1-3 pisos): Sup" value="sup" />
        <Picker.Item label="Suelo tipo E (1-3 pisos): Inf" value="inf" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={sueloTipoE_GT3Pisos}
        onValueChange={(itemValue) => setSueloTipoE_GT3Pisos(itemValue)}
      >
        <Picker.Item label="Suelo tipo E (> 3 pisos): Sup" value="sup" />
        <Picker.Item label="Suelo tipo E (> 3 pisos): Inf" value="inf" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={resultadoMinimoSmin}
        onValueChange={(itemValue) => setResultadoMinimoSmin(itemValue)}
      >
        <Picker.Item label="Resultado mínimo, Smin: Sup" value="sup" />
        <Picker.Item label="Resultado mínimo, Smin: Inf" value="inf" />
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={resultadoFinalSL1_GT_Smin}
        onValueChange={(itemValue) => setResultadoFinalSL1_GT_Smin(itemValue)}
      >
        <Picker.Item label="Resultado final Nivel 1, SL1 ≥ Smin: Sup" value="sup" />
        <Picker.Item label="Resultado final Nivel 1, SL1 ≥ Smin: Inf" value="inf" />
      </Picker>

      {/* Botones de Navegación */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.prevButton} onPress={() => navigation.goBack()}>
          <Text style={styles.nextButtonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>→</Text>
        </TouchableOpacity>
      </View>
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
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  prevButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 8,
    cursor: 'pointer',
    backgroundColor: 'lightgray',
  },
  nextButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 8,
    cursor: 'pointer',
    backgroundColor: 'lightblue',
  },
  nextButtonText: {
    fontSize: 20,
  },
});

export default FormularioFema3;
