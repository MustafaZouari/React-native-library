import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import { height, width } from "../../utilities/Distances";
import { ITEM_HEIGHT } from "./SharedElements";
import { SPACING } from "./SharedElements";
import { detailsIcons } from "./sharedElementsData";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-native-shared-element";
import { ScrollView } from "react-native-gesture-handler";

const TOP_HEADER_HEIGHT = height * 0.3;

const DURATION = 120;

const ImageDetails = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <SharedElement id={`item.${item.key}.bg`}>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: item.color, height: TOP_HEADER_HEIGHT + 16 },
          ]}
        />
      </SharedElement>
      <SharedElement id={`item.${item.key}.name`}>
        <Text style={styles.name}>{item.name}</Text>
      </SharedElement>
      <SharedElement id={`item.${item.key}.image`}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </SharedElement>
      <SharedElement id="general.bg">
        <View style={styles.bg}>
          <ScrollView scrollEnabled>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginVertical: SPACING * 2.2,
              }}
            >
              {detailsIcons.map((detail, index) => {
                return (
                  <Animatable.View
                    animation="bounceIn"
                    delay={DURATION + index * 100}
                    useNativeDriver={true}
                    key={index + `item.${detail.icon}`}
                    style={{
                      backgroundColor: detail.color,
                      height: 60,
                      width: 60,
                      borderRadius: 30,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AntDesign name={detail.icon} size={20} />
                  </Animatable.View>
                );
              })}
            </View>
            <View>
              {item.categories.map((category, index) => {
                return (
                  <View key={category.key} style={{ marginVertical: SPACING }}>
                    <Text style={styles.catTite}>{category.title}</Text>
                    {category.subcats.map((subCategory, index) => {
                      return (
                        <Animatable.View
                          useNativeDriver={true}
                          key={index}
                          animation="fadeInUp"
                          delay={DURATION * 3 + index * 100}
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: SPACING / 2,
                            marginLeft: SPACING,
                          }}
                        >
                          <View
                            style={{
                              height: 8,
                              width: 8,
                              borderRadius: 4,
                              backgroundColor: "gold",
                              marginRight: SPACING,
                            }}
                          />
                          <Text style={styles.subCatTitle}>{subCategory}</Text>
                        </Animatable.View>
                      );
                    })}
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </SharedElement>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width,
    height,
    position: "absolute",
    backgroundColor: "white",
    transform: [{ translateY: TOP_HEADER_HEIGHT }],
    borderRadius: 16,
    padding: SPACING,
  },
  name: {
    fontWeight: "700",
    fontSize: 22,
    position: "absolute",
    top: TOP_HEADER_HEIGHT - SPACING * 4,
    left: SPACING,
  },

  image: {
    height: ITEM_HEIGHT * 0.8,
    width: ITEM_HEIGHT * 0.8,
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 0.8 + 10,
  },
  catTite: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: SPACING,
    marginTop: 4,
  },
  subCatTitle: {
    fontSize: 14,
    opacity: 0.6,
  },
});

ImageDetails.SharedElement = (route, otherRoute, showing) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.key}.image`,
    },
    {
      id: `item.${item.key}.name`,
    },
    {
      id: `item.${item.key}.bg`,
    },
    {
      id: `general.bg`,
    },
  ];
};
export default ImageDetails;
