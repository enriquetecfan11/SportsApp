import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';

function GoalsScreen() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState('');

  const handleAddGoal = () => {
    setGoals([...goals, goal]);
    setGoal('');
  }

  const handleDeleteGoal = (goal) => {
    setGoals(goals.filter(item => item !== goal));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Añade tus propios objetivos</Text>
      <View style={styles.box}>
        <TextInput
          style={styles.subtitle}
          placeholder="Escribe tu objetivo"
          value={goal}
          onChangeText={text => setGoal(text)}
        />
        <TouchableOpacity onPress={handleAddGoal}>
          <Text style={styles.subtitle}>Añadir objetivo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <Text style={styles.pruebasText}>{item}</Text>
              <View style={styles.pruebas}>
                <Button title="Añadir Prueba" />
                <Button title="Ver Pruebas" />
                <Button style={styles.delete} title="Borrar" onPress={() => handleDeleteGoal(item)} />
              </View>
              <View style={styles.emojis}>
                <Button title='👍'></Button>
                <Button title='👌'></Button>
                <Button title='🤔'></Button>
                <Button title='👎'></Button>
              </View>
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
    backgroundColor: '#fff',
    padding: 20,
  },
  box: {
    backgroundColor: '#eee',
    padding: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  delete: {
    backgroundColor: 'red',
  },
  pruebas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#000',
    paddingTop: 10,
  },
  emojis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  pruebasText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default GoalsScreen;
