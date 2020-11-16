import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeView = ({ children, ...props }) => {
  return <SafeAreaView {...props}>{children}</SafeAreaView>;
};

export default SafeView;
