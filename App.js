import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from'./Screens/RegisterScreen';
const Stack = createStackNavigator()
export default function App() {
  
  return (
    // <SafeAreaView>
    //   <LoginScreen></LoginScreen>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen"
            screenOptions={{
            headerShown: false, }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


