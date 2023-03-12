import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import GoalsScreen from './screens/GoalsScreen';
import StadisticScreen from './screens/StadisticScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={{backgroundColor: '#f1eeeb'}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Goals') {
              iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
            } else if (route.name == 'Stadictis'){
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { position: 'absolute' },
          tabBarShowLabel: false,
          tabBarAllowFontScaling: true,
          tabBarShowLabel: true,
          headerShown: false

        })}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Goals" component={GoalsScreen}/>
        <Tab.Screen name="Stadictis" component={StadisticScreen}/>
        <Tab.Screen name="profile" component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
