import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/iconButton/IconButton";
import SafeView from "../components/SafeView/SafeView";

const data = [
  {
    color: "black",
    textColor: "white",
    title: "GO TO TABS",
    navigateTo: `animated-tabs`,
  },
  {
    color: "#457b9d",
    textColor: "white",
    title: "Go To Donut Chart",
    navigateTo: "donut-chart",
  },
  {
    color: "black",
    textColor: "white",
    title: "go to synced lists",
    navigateTo: "synced-lists",
  },
  {
    color: "#457b9d",
    textColor: "white",
    title: "Go To playground",
    navigateTo: "playground",
  },
  {
    color: "black",
    textColor: "white",
    title: "Go To Carousel",
    navigateTo: "carousel",
  },
  {
    color: "#457b9d",
    textColor: "white",
    title: "Go To Shared elements",
    navigateTo: "shared-elements",
  },
];

const HomePage = ({ navigation }) => (
  <SafeView style={styles.container}>
    <StatusBar hidden />
    {data.map((el, i) => {
      return (
        <IconButton
          key={i}
          color={el.color}
          textColor={el.textColor}
          textStyle={{ fontSize: 20, textTransform: "uppercase" }}
          title={el.title}
          onPress={() => {
            navigation.navigate(el.navigateTo);
          }}
        />
      );
    })}
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
