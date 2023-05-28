import { View, Animated, useWindowDimensions } from "react-native";
import React from "react";
import Styles from "./Paginator.module.scss";

export default function Paginator({ style, data, scrollX, currentStep = -1 }) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ ...style, ...Styles.container }}>
      {data.map((_, i) => {
        let dotWidth;
        let opacity;
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        if (currentStep === -1) {
          dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [15, 30, 15],
            extrapolate: "clamp",
          });
          opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
        } else {
          dotWidth = currentStep === i ? 30 : 15;
          opacity = currentStep === i ? 1 : 0.3;
        }

        return (
          <Animated.View
            style={{ ...Styles.dot, width: dotWidth, opacity }}
            key={i}
          />
        );
      })}
    </View>
  );
}
