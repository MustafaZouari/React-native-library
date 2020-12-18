import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Donut  from './AnimatedDonut'

const data = [
  {
    percentage: 8,
    color: "tomato",
    max: 10,
  },
  {
    percentage: 14,
    color: "skyblue",
    max: 20,
  },
  {
    percentage: 92,
    color: "gold",
    max: 100,
  },
  {
    percentage: 240,
    color: "#222",
    max: 500,
  },
  {
    percentage: 200,
    color: "#78290F",
    max: 400,
  },
];

const AnimatedCharts = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {data.map((p, i) => {
          return (
            <Donut
              key={i}
              percentage={p.percentage}
              color={p.color}
              delay={100}
              max={p.max}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 8,
  },
});

export default AnimatedCharts;
