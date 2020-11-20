import React from "react";
import { View, StyleSheet } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const PlayGround = () => {
  const translateX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <TapGestureHandler>
        <Animated.View style={[styles.box]} />
      </TapGestureHandler>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 60,
    width: 60,
    backgroundColor: "#e63946",
    borderRadius: 2,
  },
});
export default PlayGround;
