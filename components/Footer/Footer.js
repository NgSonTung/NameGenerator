import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Styles from "./Footer.module.scss";
import Home from "../../assets/Home.svg";
import Compass from "../../assets/Compass.svg";
import Options from "../../assets/Options.svg";
import User from "../../assets/User.svg";

export default function Footer({ style }) {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <View style={{ ...style, ...Styles.container, ...styles.shadow }}>
      <TouchableWithoutFeedback>
        <View style={[Styles.wrapper, { opacity: selectedId === 0 ? 1 : 0.5 }]}>
          <Home style={Styles.icon} />
          <Text style={Styles.title}>Home</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={[Styles.wrapper, { opacity: selectedId === 1 ? 1 : 0.5 }]}>
          <Compass style={Styles.icon} />
          <Text style={Styles.title}>Discover</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={[Styles.wrapper, { opacity: selectedId === 2 ? 1 : 0.5 }]}>
          <User style={Styles.icon} />
          <Text style={Styles.title}>User</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={[Styles.wrapper, { opacity: selectedId === 3 ? 1 : 0.5 }]}>
          <Options style={Styles.icon} />
          <Text style={Styles.title}>Settings</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
  },
});
