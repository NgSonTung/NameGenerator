import React, { useRef, useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Styles from "./OnboardingItem.module.scss";

const width = Dimensions.get("window").width;

export default function OnboardingItem({ item }) {
  return (
    <View style={{ ...Styles.container, width: width }}>
      <Image style={Styles.image} source={item.image} />
      <View style={Styles.descWrapper}>
        <Text style={Styles.title}>{item.title}</Text>
        <Text style={Styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );
}
