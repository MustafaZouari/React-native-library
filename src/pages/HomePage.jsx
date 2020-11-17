import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
<<<<<<< HEAD
import IconButton from "../components/HomeIcon/IconButton";
=======
import IconButton from "../components/iconButton/IconButton";
>>>>>>> animated_donut_chart
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
<<<<<<< HEAD
      color="#e63946"
      textColor="black"
      textStyle={{ fontSize: 20 }}
      title="GO TO SYNCED_LISTS"
      onPress={() => {
        navigation.navigate("synced-lists");
=======
      color="black"
      textColor="white"
      textStyle={{ fontSize: 20, textTransform: "uppercase" }}
      title="Go To Donut Chart"
      onPress={() => {
        navigation.navigate("donut-chart");
>>>>>>> animated_donut_chart
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
