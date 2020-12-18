import React, { useEffect, useRef } from "react";
import { View,  StyleSheet, Animated } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import Svg, { G, Circle } from "react-native-svg";
<<<<<<< HEAD
import SafeView  from '../../components/SafeView/SafeView'
=======
>>>>>>> carousel

// animated custom components
const AnimatedCircle = new Animated.createAnimatedComponent(Circle);
const AnimatedInput = new Animated.createAnimatedComponent(TextInput);

const AnimatedDonut = ({
  percentage = 10,
  radius = 50,
  strokeWidth = 14,
  duration = 2000,
  color = "tomato",
  delay = 500,
  textColor,
  max = 100,
}) => {
  // relative measures
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  // animatedValues
  const animatedValue = useRef(new Animated.Value(0)).current;

  // refs
  const circleRef = useRef();
  const inputRef = useRef();

  // functions
  const animate = (toValue) => {
    Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  // when mounted
  useEffect(() => {
    animate(percentage);
    animatedValue.addListener((v) => {
      // to directly manipulate the Circle's props
      if (circleRef?.current) {
        // relative measures
        const maxPercentage = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPercentage) / 100;
        // ===>
        circleRef.current.setNativeProps({ strokeDashoffset });
      }
      // to directly manipulate the input's value
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
    });
    return () => {
      animatedValue.removeAllListeners();
    };
  }, [percentage, max]);

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2} `}
      >
        <G rotation="-90" origin={`${halfCircle} , ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.3}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <TextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          {
            fontSize: radius / 2,
            color: textColor ?? color,
            fontWeight: "500",
            textAlign: "center",
          },
        ]}
      />
    </View>
  );
};

export default AnimatedDonut;
