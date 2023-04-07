import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import styles from "./style";

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>BMI calculator</Text>
    </View>
  );
}
