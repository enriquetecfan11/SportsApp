import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1eeeb' }}>
      {/* <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 60 }}>Sports And Friends App</Text> */}
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 400, height: 400, marginBottom: 30 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        Bienvenido a Sports And Friends
      </Text>
      <Text style={{ textAlign: 'center', paddingHorizontal: 20 }}>
        Con esta aplicación, puedes agregar y hacer seguimiento de tus objetivos y hábitos, y ganar puntos por tus logros.
      </Text>
      <Text style={{ textAlign: 'center', paddingHorizontal: 20 }}>
        Además, puedes compartir tus objetivos y hábitos con tus amigos y hacer un seguimiento de tus progresos.
      </Text>
    </View>
  );
}


export default HomeScreen;
