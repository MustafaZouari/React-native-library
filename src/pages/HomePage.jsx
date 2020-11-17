import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/iconButton/IconButton";
import SafeView from "../components/safeView/SafeView";

const HomePage = ({ navigation }) => (
  <SafeView style={styles.container}>
    <StatusBar hidden />

    <IconButton
      color="black"
      textColor="white"
      textStyle={{ fontSize: 20 }}
      title="GO TO TABS"
      onPress={() => {
        navigation.navigate("animated-tabs");
      }}
    />
    <IconButton
      color="#457b9d"
      textColor="white"
      textStyle={{ fontSize: 20, textTransform: "uppercase" }}
      title="Go To Donut Chart"
      onPress={() => {
        navigation.navigate("donut-chart");
      }}
    />
    <IconButton
      color="black"
      textColor="white"
      textStyle={{ fontSize: 20, textTransform: "uppercase" }}
      title="Go To Synced lists"
      onPress={() => {
        navigation.navigate("synced-lists");
      }}
    />
  </SafeView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
export default HomePage;
