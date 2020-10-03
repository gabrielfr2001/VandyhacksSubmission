import React from "react";
import { TextInput } from "react-native";

const CustomInput = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  style,
}) => (
  <TextInput
    style={[s.inputText, style]}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    value={value}
    onChangeText={onChangeText}
  ></TextInput>
);
const s = require("../style/global-style.js");

export default CustomInput;
