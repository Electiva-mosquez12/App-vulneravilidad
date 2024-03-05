import React, { useState } from 'react';
import { View, Text, CheckBox, Picker, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const FormularioFema5 = ({ route, navigation }) => {
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
  } = params;

  // Estados para los campos del FormularioParte5
  const [accionRequerida, setAccionRequerida] = useState('');
  const [evaluacionDetalladaElementosNoEstructurales, setEvaluacionDetalladaElementosNoEstructurales] = useState('');
  const [inspeccionNivel2, setInspeccionNivel2] = useState('');

  const handleGuardar = () => {
    // Puedes agregar lógica para guardar los datos si es necesario
    // Por ahora, solo navegaré a una pantalla ficticia llamada 'FormularioGuardado'
    navigation.navigate('FormularioGuardado', {
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
      accionRequerida,
      evaluacionDetalladaElementosNoEstructurales,
      inspeccionNivel2,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulario FEMA P-154</Text>
      <Text style={styles.subtitle}>Acción requerida</Text>

      {/* Preguntas y Checkboxes */}
      <Text>¿Se requiere de una evaluación estructural más detallada?</Text>
      <CheckBox
        value={checkBox1}
        onValueChange={(newValue) => setCheckBox1(newValue)}
      />
      <Text>1. Si, se desconoce el tipo de edificio según FEMA</Text>
      <CheckBox
        value={checkBox2}
        onValueChange={(newValue) => setCheckBox2(newValue)}
      />
      <Text>2. Si, resultado menor que el límite</Text>
      <CheckBox
        value={checkBox3}
        onValueChange={(newValue) => setCheckBox3(newValue)}
      />
      <Text>3. Si, otros peligros presentes</Text>
      <CheckBox
        value={checkBox4}
        onValueChange={(newValue) => setCheckBox4(newValue)}
      />
      <Text>4. No</Text>

      <Text>¿Se requiere una evaluación detallada de elementos no estructurales?</Text>
      <Picker
        style={styles.input}
        selectedValue={evaluacionDetalladaElementosNoEstructurales}
        onValueChange={(itemValue) => setEvaluacionDetalladaElementosNoEstructurales(itemValue)}
      >
        <Picker.Item label="1. Si, hay peligro de caída de elementos" value="siPeligroCaidaElementos" />
        <Picker.Item label="2. No, existe amenaza de elementos no estructurales y deben ser mitigados, pero la evaluación detallada no es necesaria" value="noAmenazaMitigada" />
        <Picker.Item label="3. No, no existe peligro de elementos no estructurales" value="noPeligroElementos" />
        <Picker.Item label="4. No, se sabe" value="noSabe" />
      </Picker>

      <Text>¿Se requiere de una inspección de Nivel 2?</Text>
      <Picker
        style={styles.input}
        selectedValue={inspeccionNivel2}
        onValueChange={(itemValue) => setInspeccionNivel2(itemValue)}
      >
        <Picker.Item label="Si" value="si" />
        <Picker.Item label="No" value="no" />
      </Picker>

      {/* Botones de Navegación */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.prevButton} onPress={() => navigation.goBack()}>
          <Text style={styles.nextButtonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guardarButton} onPress={handleGuardar}>
          <Text style={styles.nextButtonText}>Guardar</Text>
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
  guardarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 8,
    cursor: 'pointer',
    backgroundColor: 'green',
  },
  nextButtonText: {
    fontSize: 20,
  },
});

export default FormularioFema5;
