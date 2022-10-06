import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header  from "../Components/Login/Header";
import Footer from "../Components/Login/Footer";
import Form from "../Components/Login/Form";
export default function LoginScreen() {
    return (
      <View >
        <Header></Header>
        <Form></Form>
        <Footer></Footer> 
      </View> 
    );
  }