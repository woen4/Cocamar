import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../src/pages/Landing";
import ImageStats from "../src/pages/ImageStats";
import CameraScreen from "../src/pages/Camera";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <Stack.Screen name="Landing" component={Landing}></Stack.Screen>
        <Stack.Screen name="Camera" component={CameraScreen}></Stack.Screen>
        <Stack.Screen name="ImageStats" component={ImageStats}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
