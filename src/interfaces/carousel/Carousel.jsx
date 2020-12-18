import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("screen");

const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
const SPACING = 20;

const DATA = [
  {
    key: "3571572",
    title: "Multi-lateral intermediate moratorium",
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571572.png",
  },
  {
    key: "3571747",
    title: "Automated radical data-warehouse",
    description:
      "Use the optical SAS system, then you can navigate the auxiliary alarm!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571747.png",
  },
  {
    key: "3571680",
    title: "Inverse attitude-oriented system engine",
    description:
      "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571680.png",
  },
  {
    key: "3571603",
    title: "Monitored global data-warehouse",
    description: "We need to program the open-source IB interface!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571603.png",
  },
];

const Backdrop = ({ scrollX }) => {
  const bg = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor: bg }]}
    />
  );
};

const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        width: height,
        height,
        borderRadius: 90,
        backgroundColor: "#fff",
        transform: [{ rotate }, { translateX }],
        top: -height * 0.5,
        left: -height * 0.3,
      }}
    />
  );
};

const Indicator = ({ scrollX }) => {
  return (
    <Animated.View
      style={{ position: "absolute", bottom: 50, flexDirection: "row" }}
    >
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        // animated values
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.7, 1.1, 0.7],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i}
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: "#7a7a7d",
              margin: 6,
              transform: [{ scale }],
              opacity,
            }}
          />
        );
      })}
    </Animated.View>
  );
};

// const List = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   return (

// }
const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <FlatList
        data={DATA}
        keyExtractor={(item) => String(item.key)}
        horizontal
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{}}
        renderItem={({ item, i }) => {
          return (
            <View style={styles.container}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 0.7,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: width / 2, height: width / 2 }}
                />
              </View>
              <View style={{ flex: 0.3, padding: SPACING }}>
                <Text
                  style={{ fontWeight: "800", fontSize: 22, color: "white" }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    color: "white",
                    marginTop: 10,
                    fontSize: 16,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />

      <Indicator scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: "center",
  },
  image: {},
  text: {
    flex: 0.3,
    borderWidth: 1,
  },
});
export default Carousel;
