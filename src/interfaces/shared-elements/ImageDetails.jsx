import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const ImageDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Details Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
});
export default ImageDetails;
