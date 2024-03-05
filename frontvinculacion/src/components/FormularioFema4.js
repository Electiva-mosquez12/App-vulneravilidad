import React, { useState } from 'react';
import { View, Text, Picker, TextInput, CheckBox, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const FormularioFema4 = ({ route, navigation }) => {
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
  } = params;

  // Estados para los campos del FormularioParte4
  const [revisionExterior, setRevisionExterior] = useState('');
  const [revisionInterior, setRevisionInterior] = useState('');
  const [revisionPlanos, setRevisionPlanos] = useState('');
  const [fuenteTipoSuelo, setFuenteTipoSuelo] = useState('');
  const [fuentePeligrosGeologicos1, setFuentePeligrosGeologicos1] = useState('');
  const [fuentePeligrosGeologicos2, setFuentePeligrosGeologicos2] = useState('');
  const [evaluacionDetallada, setEvaluacionDetallada] = useState(false);
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [checkBox4, setCheckBox4] = useState(false);

  const handleNext = () => {
    // Puedes realizar validaciones o enviar los datos a la siguiente parte del formulario
    // Por ahora, solo navegaré a una pantalla ficticia llamada 'FormularioParte5'
    navigation.navigate('FormularioParte5', {
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
      revisionExterior,
      revisionInterior,
      revisionPlanos,
      fuenteTipoSuelo,
      fuentePeligrosGeologicos1,
      fuentePeligrosGeologicos2,
      evaluacionDetallada,
      checkBox1,
      checkBox2,
      checkBox3,
      checkBox4,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulario FEMA P-154</Text>
      <Text style={styles.subtitle}>Extensión de la revisión</Text>

      {/* Selects */}
      <Picker
        style={styles.input}
        selectedValue={revisionExterior}
        onValueChange={(itemValue) => setRevisionExterior(itemValue)}
      >
        <Picker.Item label="Exterior" value="exterior" />
        {/* Agrega más opciones según sea necesario */}
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={revisionInterior}
        onValueChange={(itemValue) => setRevisionInterior(itemValue)}
      >
        <Picker.Item label="Interior" value="interior" />
        {/* Agrega más opciones según sea necesario */}
      </Picker>

      <Picker
        style={styles.input}
        selectedValue={revisionPlanos}
        onValueChange={(itemValue) => setRevisionPlanos(itemValue)}
      >
        <Picker.Item label="Revisión planos: Sí" value="si" />
        <Picker.Item label="Revisión planos: No" value="no" />
      </Picker>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Fuente del tipo de suelo"
        value={fuenteTipoSuelo}
        onChangeText={(text) => setFuenteTipoSuelo(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Fuente de peligros geológicos 1"
        value={fuentePeligrosGeologicos1}
        onChangeText={(text) => setFuentePeligrosGeologicos1(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Fuente de peligros geológicos 2"
        value={fuentePeligrosGeologicos2}
        onChangeText={(text) => setFuentePeligrosGeologicos2(text)}
      />

      <Text style={styles.subtitle}>Otros Peligros</Text>

      {/* Pregunta y Checkboxes */}
      <Text>¿Hay peligros que desencadenan una evaluación estructural detallada?</Text>
      <CheckBox
        value={evaluacionDetallada}
        onValueChange={(newValue) => setEvaluacionDetallada(newValue)}
      />
      <Text>1. Posible golpeteo entre edificios</Text>
      <CheckBox
        value={checkBox1}
        onValueChange={(newValue) => setCheckBox1(newValue)}
      />
      <Text>2. Riesgo de caída de edificios adyacentes más altos</Text>
      <CheckBox
        value={checkBox2}
        onValueChange={(newValue) => setCheckBox2(newValue)}
      />
      <Text>3. Peligro geológico o Suelo tipo F</Text>
      <CheckBox
        value={checkBox3}
        onValueChange={(newValue) => setCheckBox3(newValue)}
      />
      <Text>4. Daños significativos/deterioro del sistema estructural</Text>
      <CheckBox
        value={checkBox4}
        onValueChange={(newValue) => setCheckBox4(newValue)}
      />

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

export default FormularioFema4;
