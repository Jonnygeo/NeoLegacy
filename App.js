// App.js - Mobile scaffold for NeoLegacy
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LogEntryScreen from './screens/LogEntryScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'NeoLegacy' }} />
        <Stack.Screen name="LogEntry" component={LogEntryScreen} options={{ title: 'New Memory' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings & Style' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
