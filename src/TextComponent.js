import React, { useEffect } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function TextComponent() {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");
  const handleText = (text) => {
    console.log(text);
    setText(text);
  };

  const toDastination = () => {
    if (text) {
      navigation.navigate({
        name: "TwoTextinput",
        params: { post: text },
        merge: true
      });
    }
  };

  React.useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(e) => {
          handleText(e);
        }}
        style={styles.textInput1}
        placeholder="Enter name"
      />
      <Button title="Send" onPress={toDastination} style={styles.button1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "grey"
  },
  textInput1: {
    width: "50%",
    backgroundColor: "#556789",
    borderRadius: 5,
    height: "10%",
    FontFace: "Aria",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
    color: "black"
  },
  button1: {
    width: "40%"
  }
});

export default TextComponent;
