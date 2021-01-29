import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/iconButton/IconButton";
import SafeView from "../components/SafeView/SafeView";
import { data } from "../navigation/navigationData";

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
