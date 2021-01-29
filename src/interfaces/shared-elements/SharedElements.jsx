import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-native-shared-element";
import { height, width } from "../../utilities/Distances";
import data from "./sharedElementsData";

export const ITEM_HEIGHT = height * 0.2;

// const Images = [
//   "https://images.unsplash.com/photo-1608635674713-81e5f57c3f22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80",
//   "https://images.unsplash.com/photo-1608635818536-f8cb56841739?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//   "https://images.unsplash.com/photo-1608634768640-be404dcfddf5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
//   "https://images.unsplash.com/photo-1608596848608-67d76d09d77c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80",
// ];
export const SPACING = 10;

const SharedElements = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          padding: SPACING,
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("shared-elements-detail", { item });
              }}
              style={{ marginBottom: SPACING, height: ITEM_HEIGHT }}
            >
              <View style={{ flex: 1, padding: SPACING }}>
                <SharedElement
                  id={`item.${item.key}.bg`}
                  style={[StyleSheet.absoluteFillObject]}
                >
                  <View
                    style={[
                      StyleSheet.absoluteFillObject,
                      { backgroundColor: item.color, borderRadius: 16 },
                    ]}
                  />
                </SharedElement>

                <SharedElement id={`item.${item.key}.name`}>
                  <Text style={styles.name}>{item.name}</Text>
                </SharedElement>
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                <SharedElement
                  id={`item.${item.key}.image`}
                  style={styles.image}
                >
                  <Image source={{ uri: item.image }} style={styles.image} />
                </SharedElement>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <SharedElement id="general.bg">
        <View style={styles.bg} />
      </SharedElement>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  },
  imageContainer: {
    height: height / 1.5,
    width: width / 1.3,
  },
  name: {
    fontWeight: "700",
    fontSize: 18,
  },
  jobTitle: {
    fontSize: 12,
    opacity: 0.7,
  },
  image: {
    height: ITEM_HEIGHT * 0.8,
    width: ITEM_HEIGHT * 0.8,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  bg: {
    width,
    height,
    position: "absolute",
    backgroundColor: "red",
    transform: [{ translateY: height / 2 }],
    borderRadius: 16,
  },
});
export default SharedElements;
