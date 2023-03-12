import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';

const ProfileScreen = () => {
  // Create a profile screen to show what user is loggin

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1eeeb'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
});

export default ProfileScreen;
