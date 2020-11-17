import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../pages/HomePage";
import AnimatedTabs from "../interfaces/animated-tabs/AnimatedTabs";
import { StatusBar } from "expo-status-bar";
import SyncedLists from "../interfaces/synced-list/SyncedLists";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="animated-tabs" component={AnimatedTabs} />
      <Stack.Screen name="synced-lists" component={SyncedLists} />
    </Stack.Navigator>
  );
}
