import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

function GoalsScreen() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const handleAddGoal = () => {
    if (goal.trim()) {
      setGoals([...goals, { id: Math.random().toString(), title: goal.trim() }]);
      setGoal('');
    }
  };

  const handleRemoveGoal = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <View style={styles.goal}>
              <Text style={styles.goalText}>{item.title}</Text>
              <TouchableOpacity onPress={() => handleRemoveGoal(item.id)}>
                <Text style={styles.goalRemove}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TextInput
          style={styles.input}
          placeholder="Agregar un objetivo"
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddGoal}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
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
