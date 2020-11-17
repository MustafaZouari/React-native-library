import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/HomeIcon/IconButton";
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
