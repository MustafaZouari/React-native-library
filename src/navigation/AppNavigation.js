import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AnimatedCharts from "../interfaces/animated-donut-chart/AnimatedCharts";
import AnimatedTabs from "../interfaces/animated-tabs/AnimatedTabs";
import SyncedLists from "../interfaces/synced-list/SyncedLists";
import PlayGround from "../interfaces/playground/PlayGround";
import Carousel from "../interfaces/carousel/Carousel";
import SharedElements from "../interfaces/shared-elements/SharedElements";
import HomePage from "../pages/HomePage";
import Gallery from "../interfaces/synced-gallery/Gallery";
import ImageDetails from "../interfaces/shared-elements/ImageDetails";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="animated-tabs" component={AnimatedTabs} />
      <Stack.Screen name="synced-lists" component={SyncedLists} />
      <Stack.Screen name="donut-chart" component={AnimatedCharts} />
      <Stack.Screen name="playground" component={PlayGround} />
      <Stack.Screen name="carousel" component={Carousel} />
      <Stack.Screen name="shared-elements" component={SharedElements} />
      <Stack.Screen name="shared-elements-detail" component={ImageDetails} />
    </Stack.Navigator>
  );
}
