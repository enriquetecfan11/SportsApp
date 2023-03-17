import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Button, ScrollView } from 'react-native';

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
      {/* Add goals view */}
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
      {/* List of goals */}
      <ScrollView style={styles.list}>
        {goals.map((goal, index) => (
          <View key={index} style={styles.box}>
            <View style={styles.box}>
              <Text style={styles.pruebasText}>{goal}</Text>
              <View style={styles.pruebas}>
                <Button title="Añadir Prueba" />
                <Button title="Ver Pruebas" />
              </View>
              <View style={styles.emojis}>
                <Button title='👍'></Button>
                <Button title='👌'></Button>
                <Button title='🤔'></Button>
                <Button title='👎'></Button>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleDeleteGoal(goal)}>
              <Text style={styles.delete}>Eliminar objetivo</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
    padding: 5,
    marginBottom: 10,
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
  list: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    maxHeight: 570,
    marginBottom: 40,
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  }
});

export default GoalsScreen;
