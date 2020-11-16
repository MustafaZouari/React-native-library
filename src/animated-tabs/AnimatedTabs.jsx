import React, { useCallback, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Animated,
  findNodeHandle,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import SafeView from "../components/SafeView/SafeView";
import data from "./tabData";
import { width, height } from "../utilities/Distances";

// const GoBack = () => (
//   <Pressable
//     onPress={() => {
//       navigation.goBack();
//     }}
//     style={{ backgroundColor: "black" }}
//   >
//     <Text>Goback</Text>
//   </Pressable>
// );

const Indicator = ({ measures, scrollX }) => {
  const inputRange = data.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });
  return (
    <Animated.View
      style={{
        position: "absolute",
        backgroundColor: "red",
        height: 2,
        width: indicatorWidth,
        left: 0,
        bottom: -4,
        transform: [{ translateX: translateX }],
      }}
    />
  );
};
const Tab = React.forwardRef(({ item, onItemPress }, ref) => (
  <TouchableOpacity onPress={onItemPress}>
    <View ref={ref}>
      <Text
        style={{
          color: "white",
          textTransform: "uppercase",
          fontSize: 70 / data.length,
          fontWeight: "700",
        }}
      >
        {item.title}
      </Text>
    </View>
  </TouchableOpacity>
));

const Tabs = ({ data, scrollX, onItemPress }) => {
  const [measures, setMeasures] = useState([]);
  const containerRef = useRef();

  React.useEffect(() => {
    let m = [];

    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({ x, y, width, height });

          if (m.length === data.length) {
            setMeasures(m);
          }
        }
      );
    });
  }, []);

  return (
    <View style={{ position: "absolute", top: 50, width }}>
      <View
        ref={containerRef}
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {data.map((el, i) => {
          return (
            <Tab
              key={el.key}
              item={el}
              ref={el.ref}
              onItemPress={() => onItemPress(i)}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

const AnimatedTabs = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref = useRef();
  const onItemPress = useCallback((itemIndex) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  });

  return (
    <View>
      <StatusBar />
      <Animated.FlatList
        ref={ref}
        data={data}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        decelerationRate="fast"
        scrollEventThrottle={16}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.image }}
                style={{ flex: 1, resizeMode: "cover" }}
              />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { backgroundColor: "rgba(0,0,0,0.2)" },
                ]}
              />
            </View>
          );
        }}
      />
      <Tabs data={data} scrollX={scrollX} onItemPress={onItemPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AnimatedTabs;
