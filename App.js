import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import LoginScreen from './Screens/LoginScreen';

export default function App() {
  
  return (
    <SafeAreaView>
      <LoginScreen></LoginScreen>
    </SafeAreaView>
  );
}


