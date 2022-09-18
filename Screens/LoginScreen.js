import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header  from "../Components/Header";
import Footer from "../Components/Footer";
import Form from "../Components/Form";
export default function LoginScreen() {
    return (
      <View >
        <Header></Header>
        <Form></Form>
        <Footer></Footer> 
      </View>
    );
  }