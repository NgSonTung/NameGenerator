import {
  Dimensions,
  View,
  TouchableWithoutFeedback,
  Text,
  Keyboard,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import steps from "./data/steps";
import Styles from "./Home.module.scss";
import Onboarding from "../components/Onboarding/Onboarding";
import ChoiceButton from "../components/ChoiceButton/ChoiceButton";
import Paginator from "../components/Paginator/Paginator";
import Footer from "../components/Footer/Footer";

export default function App({ style }) {
  const [showOnboard, setShowOnboard] = useState(true);
  const [step, setStep] = useState(0);
  const [pref, setPref] = useState({});

  const HandleUpdatePref = (object) => {
    const updatedPref = pref;
    updatedPref[object.key] = object.value;
    setPref(updatedPref);
    const nextStep = step + 1;
    console.log(pref);
    nextStep < steps.length - 1 && setStep(nextStep);
  };

  const ToggleOnboard = () => {
    setShowOnboard(!showOnboard);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {showOnboard ? (
        <Onboarding exit={ToggleOnboard} />
      ) : (
        <View style={{ ...style, ...Styles.container }}>
          <View style={{ ...Styles.titleWrapper }}>
            <Text style={Styles.title}>{steps[0].title}</Text>
          </View>
          <ScrollView
            style={Styles.buttonWrapper}
            showsVerticalScrollIndicator={false}
          >
            {steps[step].choices.map((step, id) => (
              <View key={id}>
                <ChoiceButton
                  input={step?.input}
                  keyName={step?.key}
                  value={step?.value}
                  action={HandleUpdatePref}
                  img={step?.background}
                  style={Styles.button}
                  title={step?.title}
                />
              </View>
            ))}
          </ScrollView>
          <View style={Styles.paginatorWrapper}>
            <Paginator
              style={Styles.paginator}
              data={steps}
              currentStep={step}
            />
          </View>
          <Footer style={Styles.footer} />
        </View>
      )}
    </TouchableWithoutFeedback>
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
    elevation: 5,
  },
});
