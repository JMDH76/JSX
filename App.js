import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Divider, Button, TextInput} from 'react-native-paper';

const nombre = nombreRecibido => {
  return <Text style={styles.nombre}>{nombreRecibido}</Text>;
};

const datos = tusDatos => {
  return (
    <View style={estilo === 'florida' ? styles.florida : styles.upv}>
      <TextInput
        label={tusDatos}
        placeholder="placeholder"
        placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
        left={<TextInput.Icon name="pencil" />}
      />
      <TextInput
        label={tusDatos}
        placeholder="placeholder"
        placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
        left={<TextInput.Icon name="pencil" />}
      />
    </View>
  );
};

const mostrarBoton = () => {
  return (
    <Button
      style={styles.boton}
      icon="format-list-bulleted"
      mode="contained"
      //Cambia color del boton en funcion de la const estilo
      color={estilo === 'florida' ? 'red' : 'purple'}>
      INFORMES
    </Button>
  );
};

const estilo = 'upv';
const isAdmin = true;
const modulos2Dam = [
  {nombre: 'DIN', profesor: 'Manel', horas: 120},
  {nombre: 'ADA', profesor: 'Juanmi', horas: 120},
  {nombre: 'PMDM', profesor: 'Fran', horas: 100},
  {nombre: 'PSP', profesor: 'Fran', horas: 60},
  {nombre: 'SGE', profesor: 'Belén', horas: 100},
  {nombre: 'Inglés', profesor: 'Caterina', horas: 40},
  {nombre: 'EIE', profesor: 'Manuel', horas: 60},
];

class App extends Component {
  render() {
    return (
      <>
        {nombre('\n   José Manuel Domínguez Hernández')}
        {datos('  Introduce tus datos')}
        <Divider style={styles.divisor} />
        {isAdmin && mostrarBoton()}
        <Divider style={styles.divisor} />
        <ScrollView>
          {modulos2Dam.map((item, pos) => {
            return (
              <View
                style={pos % 2 === 0 ? styles.pares : styles.impares}
                key={pos}>
                <Text
                  style={
                    pos % 2 === 0 ? styles.textoPares : styles.textoImpares
                  }>
                  Asignatura {pos + 1} ---&gt; {item.nombre}
                </Text>
                <Text
                  style={
                    pos % 2 === 0 ? styles.textoPares : styles.textoImpares
                  }>
                  Profesor ---------&gt; {item.profesor}
                </Text>
                <Text
                  style={
                    pos % 2 === 0 ? styles.textoPares : styles.textoImpares
                  }>
                  Duración ---------&gt; {item.horas} horas
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </>
    );
  }
}

//Estilos que vamos a aplicar en los diferentes componentes
const styles = StyleSheet.create({
  upv: {
    margin: 5,
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 15,
    //paddingLeft: 12,
    textAlign: 'left',
    color: 'gray',
  },
  florida: {
    margin: 5,
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 15,
    //paddingRight: 12,
    textAlign: 'right',
  },
  impares: {
    backgroundColor: '#F8BBD8',
    paddingLeft: 15,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 2.5,
    //color: 'white', //No se aplica el estilo al texto, hay que ponerlo en la etiqueta: <Text styles={...}>
  },
  pares: {
    backgroundColor: '#F48FB1',
    paddingLeft: 15,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 2.5,
  },
  textoPares: {
    fontSize: 16,
    color: 'white', //para cambiar el color del texto
  },
  textoImpares: {
    fontSize: 16,
    color: 'black', //para cambiar el color del texto
  },
  divisor: {
    borderBottomWidth: 5,
    borderBottomColor: 'white',
  },
  boton: {
    margin: 5,
  },
  nombre: {
    fontSize: 20,
    color: 'black',
  },
});

export default App;
