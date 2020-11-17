import React, { useEffect, useRef } from "react";
import { View, Text, Alert, StyleSheet, Animated } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { height, width } from "../../utilities/Distances";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import data from "./listData";
import { StatusBar } from "expo-status-bar";

const ICON_SIZE = 42;

const ITEM_HEIGHT = ICON_SIZE * 2;

const colors = {
  yellow: "#FFE8A3",
  dark: "#2D2D2D",
};

const Icon = React.memo(({ icon, color }) => {
  return <SimpleLineIcons name={icon} color={color} size={ICON_SIZE} />;
});

const Item = React.memo(({ icon, color, name, showText }) => {
  return (
    <View style={styles.itemWrapper}>
      {showText ? (
        <Text style={[styles.itemText, { color }]}>{name}</Text>
      ) : (
        <View />
      )}
      <Icon icon={icon} color={color} />
    </View>
  );
});

const ConnectWithText = React.memo(() => {
  return (
    <View
      style={{
        position: "absolute",
        top: height / 2 - ITEM_HEIGHT * 2,
        width: width * 0.7,
        paddingHorizontal: 14,
      }}
    >
      <Text
        style={{
          color: colors.yellow,
          fontSize: 52,
          fontWeight: "700",
          lineHeight: 52,
        }}
      >
        Connect with...
      </Text>
    </View>
  );
});

const ConnectButton = React.memo(({ onPress }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: height / 2 + ITEM_HEIGHT / 2,
        paddingHorizontal: 14,
      }}
    >
      <View
        style={{
          height: ITEM_HEIGHT * 2,
          width: 4,
          backgroundColor: colors.yellow,
          borderWidth: 1,
        }}
      />
      <TouchableOpacity
        onPress={onPress}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 12,
          backgroundColor: colors.yellow,
          alignItems: "center",
          justifyContent: "center",
        }}
        activeOpacity={0.8}
      >
        <Text style={{ fontSize: 32, fontWeight: "800", color: colors.dark }}>
          Done!
        </Text>
      </TouchableOpacity>
    </View>
  );
});

const List = React.forwardRef(
  ({ color, showText, style, onScroll, onIndexChange }, ref) => {
    return (
      <Animated.FlatList
        data={data}
        ref={ref}
        scrollEnabled={!showText}
        keyExtractor={(item) => `${item.name} - ${item.icon}`}
        bounces={false}
        scrollEventThrottle={16}
        style={style}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onScroll={onScroll}
        contentContainerStyle={{
          paddingTop: showText ? 0 : height / 2 - ITEM_HEIGHT / 2,
          paddingBottom: showText ? 0 : height / 2 - ITEM_HEIGHT / 2,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          let index = Math.round(ev.nativeEvent.contentOffset.y) / ITEM_HEIGHT;

          if (onIndexChange) {
            onIndexChange(index);
          }
        }}
        renderItem={({ item }) => {
          return <Item {...item} color={color} showText={showText} />;
        }}
      />
    );
  }
);
const SyncedLists = () => {
  const [index, setIndex] = React.useState(0);
  const yellowRef = useRef();
  const darkRef = useRef();
  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [
      {
        nativeEvent: { contentOffset: { y: scrollY } },
      },
    ],
    { useNativeDriver: true }
  );

  const onIndexChange = React.useCallback(setIndex, []);
  const onConnectPress = React.useCallback(() => {
    Alert.alert("Connect with:", data[index].name.toUpperCase());
  }, [index]);

  useEffect(() => {
    scrollY.addListener((value) => {
      if (darkRef?.current) {
        darkRef.current.scrollToOffset({
          offset: value.value,
          animated: false,
        });
      }
    });
  });
  return (
    <View style={styles.container}>
      <ConnectWithText />
      <List
        color={colors.yellow}
        ref={yellowRef}
        style={StyleSheet.absoluteFillObject}
        onScroll={onScroll}
        onIndexChange={onIndexChange}
      />
      <List
        showText
        color={colors.dark}
        ref={darkRef}
        style={{
          position: "absolute",
          backgroundColor: colors.yellow,
          width,
          height: ITEM_HEIGHT,
          top: height / 2 - ITEM_HEIGHT / 2,
        }}
      />
      <ConnectButton onPress={onConnectPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.dark,
    paddingTop: StatusBar.currentHeight,
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: ITEM_HEIGHT,
  },
  itemText: {
    fontSize: 26,
    fontWeight: "800",
    textTransform: "capitalize",
  },
});

export default SyncedLists;
