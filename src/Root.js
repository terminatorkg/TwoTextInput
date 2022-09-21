import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TwoTextinput from "./TwoTextinput";
import { createStackNavigator } from "@react-navigation/stack";
import TextComponent from "./TextComponent";

const Stack = createStackNavigator();

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"TwoTextinput"}
      >
        <Stack.Screen name={"TwoTextinput"} component={TwoTextinput} />
        <Stack.Screen name={"TextComponent"} component={TextComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
