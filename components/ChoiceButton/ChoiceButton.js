import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";
import Styles from "./ChoiceButton.module.scss";

export default function ChoiceButton({
  input,
  img,
  style,
  action,
  title,
  keyName,
  value,
}) {
  const [text, setText] = useState(null);
  const inputRef = useRef();

  return (
    <Animated.View entering={SlideInRight} exiting={SlideOutLeft}>
      {input === "bool" && (
        <TouchableOpacity
          onPress={() => action({ key: keyName, value: value })}
          style={{ ...style, ...Styles.container }}
        >
          <Image style={Styles.background} source={img}></Image>
          <Text style={Styles.title}>{title}</Text>
        </TouchableOpacity>
      )}
      {input === "number" && (
        <View style={{ ...style, ...Styles.container }}>
          <TextInput
            ref={inputRef}
            returnKeyType="done"
            editable
            onSubmitEditing={() => inputRef.current.blur()}
            onChangeText={(txt) => setText(txt)}
            value={text}
            keyboardType="number-pad"
            style={{}}
          />
          <Image style={Styles.background} source={img}></Image>
          <Text style={Styles.title}>{title}</Text>
        </View>
      )}
      {input === "string" && (
        <View style={{ ...style, ...Styles.container }}>
          <TextInput
            ref={inputRef}
            returnKeyType="done"
            editable
            onSubmitEditing={() => inputRef.current.blur()}
            onChangeText={(txt) => setText(txt)}
            value={text}
            style={{}}
          />
          <Image style={Styles.background} source={img}></Image>
          <Text style={Styles.title}>{title}</Text>
        </View>
      )}
    </Animated.View>
  );
}
