import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Button, Image } from 'react-native';

function StadisticScreen() {
  const fakeData = [
    {
      name: 'Usuario 1',
      pruebas: 5,
      avatar: '../assets/avatar1.png'
    },
    {
      name: 'Usuario 2',
      pruebas: 3,
      avatar: '../assets/avatar2.png'
    },
    {
      name: 'Usuario 3',
      pruebas: 2,
      avatar: '../assets/avatar3.png'
    },
    {
      name: 'Usuario 4',
      pruebas: 5,
      avatar: '../assets/avatar1.png'
    },
    {
      name: 'Usuario 5',
      pruebas: 3,
      avatar: '../assets/avatar2.png'
    },
    {
      name: 'Usuario 6',
      pruebas: 2,
      avatar: '../assets/avatar3.png'
    },
    {
      name: 'Usuario 7',
      pruebas: 5,
      avatar: '../assets/avatar1.png'
    },
    {
      name: 'Usuario 8',
      pruebas: 3,
      avatar: '../assets/avatar2.png'
    },
    {
      name: 'Usuario 9',
      pruebas: 2,
      avatar: '../assets/avatar3.png'
    },
    {
      name: 'Usuario 10',
      pruebas: 5,
      avatar: '../assets/avatar1.png'
    },
  ]


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estadísticas</Text>
      <View style={styles.list}>
        <FlatList
          style={styles.list}
          data={fakeData}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <Image style={styles.image} source={require('../assets/avatar1.png')} />
              <Text style={styles.pruebasText}>{item.name}</Text>
              <Text style={styles.pruebasText}>Pruebas: {item.pruebas}</Text>
            </View>
          )}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  list: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  pruebasText: {
    fontSize: 16,
    color: '#737380',
  },
  list:{
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    maxHeight: 570,
    marginBottom: 40,
  }
});

export default StadisticScreen;
