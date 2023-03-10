import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GoalsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Goals Screen</Text>
      <Text style={styles.subtitle}>Empieza a establecer tus objetivos y hábitos ahora mismo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default GoalsScreen;
