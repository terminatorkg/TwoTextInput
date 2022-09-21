import React from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";

import TextComponent from "../src/TextComponent";

import RootNavigator from "./Root";
function App() {
  return (
    <View style={styles.container}>
      {/* <TextInput style={styles.textInput1} placeholder='from' />
      <TextInput style={styles.textInput1} placeholder='dastination'/> */}
      {/* <TextComponent/> */}
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "grey"
  }
});

export default App;
