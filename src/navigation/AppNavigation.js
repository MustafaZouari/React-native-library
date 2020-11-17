import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../pages/HomePage";
import AnimatedTabs from "../interfaces/animated-tabs/AnimatedTabs";
import { StatusBar } from "expo-status-bar";
import AnimatedChart from "../interfaces/animated-donut-chart/AnimatedChart";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="animated-tabs" component={AnimatedTabs} />
      <Stack.Screen name="donut-chart" component={AnimatedChart} />
    </Stack.Navigator>
  );
}
