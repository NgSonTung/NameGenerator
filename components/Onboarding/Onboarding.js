import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
  Animated as NativeAnimated,
} from "react-native";
import React, { useRef, useState } from "react";
import Styles from "./Onboarding.module.scss";
import slides from "./data/slide";
import OnboardingItem from "../OnboardingItem/OnboardingItems";
import Paginator from "../Paginator/Paginator";
import slide from "./data/slide";
import Cross from "../../assets/Cross.svg";
import Animated, { SlideOutDown } from "react-native-reanimated";

export default function Onboarding({ style, exit }) {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new NativeAnimated.Value(0)).current;
  const slideRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <Animated.View
      exiting={SlideOutDown}
      style={{ ...style, ...Styles.container, width }}
    >
      <View style={Styles.wrapper}>
        <TouchableOpacity onPress={exit} style={Styles.button}>
          <Cross style={Styles.icon} />
        </TouchableOpacity>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={NativeAnimated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
      <Paginator style={Styles.paginator} data={slide} scrollX={scrollX} />
    </Animated.View>
  );
}
