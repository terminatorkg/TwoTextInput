import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const TwoTextInput = () => {
  const [fromText, setFromText] = useState("");
  const [destinationText, setDestinationText] = useState("");

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const route = useRoute();
  const navigation = useNavigation();
  const setOnMap = () => {
    console.log(ref1.current);
    ref1.current ? navigation.navigate("TextComponent") : false;
  };
  const checkLocation = () => {
    if (route.params?.post) {
      setFromText(JSON.stringify(route.params?.post));
    }
    if (route.params?.destination) {
      setDestinationText(JSON.stringify(route.params?.destination));
    }
  };
  useEffect(() => {
    //console.log("render")
    checkLocation();
  }, [
    fromText,
    destinationText,
    route.params?.post,
    route.params?.destination
  ]);

  return (
    <SafeAreaView>
      <View>
        <TextInput
          ref={ref1}
          value={fromText}
          onFocus={setOnMap}
          style={styles.textInput1}
          placeholder="from"
        />

        <TextInput
          value={destinationText}
          onFocus={setOnMap}
          ref={ref2}
          style={styles.textInput1}
          placeholder="dastination"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput1: {
    width: "50%",
    backgroundColor: "#556789",
    borderRadius: 5,
    height: "50%",
    FontFace: "Aria",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
    color: "black"
  },
  textInput2: {
    width: "50%",
    backgroundColor: "#556789",
    borderRadius: 5,
    height: "10%",
    FontFace: "Aria",
    fontWeight: "bold",
    fontSize: 20
  }
});
export default TwoTextInput;
