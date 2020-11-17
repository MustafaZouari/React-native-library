import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Svg, { G, Circle } from "react-native-svg";
import SafeView from "../../components/safeView/SafeView";

const AnimatedChart = ({
  percentage = 75,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = "tomato",
  delay = 0,
  textColor,
  max = 100,
}) => {
  const halfCirle = radius + strokeWidth;
  return (
    <SafeView style={styles.container}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCirle * 2} ${halfCirle * 2} `}
      >
        <G>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.3}
          />
        </G>
      </Svg>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AnimatedChart;
