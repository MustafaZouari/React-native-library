import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { width, height } from "../../utilities/Distances";

const IconButton = ({
  title,
  color,
  onPress,
  textStyle,
  containerStyle,
  icon,
  textColor = "black",
  ...props
}) => {
  return (
    <Pressable
      style={[styles.container, containerStyle, { backgroundColor: color }]}
      onPress={onPress}
      {...props}
    >
      <Text style={[textStyle, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: height * 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconButton;
