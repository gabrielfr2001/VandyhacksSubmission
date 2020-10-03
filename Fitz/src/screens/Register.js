import React, { Component } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  sheet,
  Button,
  TextInput,
  Alert,
} from "react-native";
const LoginButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={s.appButtonContainer}>
    <Text style={s.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const RegisterScreen = ({ nav }) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  return (
    <SafeAreaView style={s.backgroundStyle}>
      <View style={{ flex: 1.5, top: 10 }}>
        <Image
          resizeMode={"stretch"}
          source={require("../../assets/logo.png")}
          style={s.logo}
        ></Image>
        <Text style={s.header}>ANYWHERE.</Text>
      </View>
      <View style={{ flex: 2.5 }}>
        <TextInput
          style={s.input}
          onChangeText={(text) => onChangeUsername(text)}
          value={username}
          placeholder="Username"
        />
        <TextInput
          placeholder="Email"
          style={s.input}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={s.input}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
        />
        <TextInput
          placeholder="Confirm password"
          secureTextEntry={true}
          style={s.input}
          onChangeText={(text) => onChangeConfirmPassword(text)}
          value={confirmPassword}
        />
        <LoginButton
          title={"Next"}
          onPress={() => {
            nav.navigate("Interests");
          }}
        ></LoginButton>
      </View>
    </SafeAreaView>
  );
};
const s = require("../style/global-style.js");

export default RegisterScreen;
