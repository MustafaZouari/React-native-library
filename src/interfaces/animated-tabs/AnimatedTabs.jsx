import React, { useCallback, useRef, useState } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import data from "./tabData";
import { width, height } from "../../utilities/Distances";

const Indicator = ({ measures, scrollX }) => {
  const inputRange = data.map((_, i) => i * width);

  // interpolated values
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
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        ref={ref}
        showsHorizontalScrollIndicator={false}
        horizontal
        decelerationRate="fast"
        scrollEventThrottle={16}
        bounces={false}
        snapToInterval={width}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
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

export default AnimatedTabs;
