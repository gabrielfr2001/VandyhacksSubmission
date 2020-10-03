import React from "react";
import { Text, TouchableHighlight } from "react-native";

const CustomButton = ({ onPress, title, style }) => (
  <TouchableHighlight onPress={onPress} style={[s.standardButton, style]}>
    <Text style={s.buttonText}>{title}</Text>
  </TouchableHighlight>
);
const s = require("../style/global-style.js");

export default CustomButton;
