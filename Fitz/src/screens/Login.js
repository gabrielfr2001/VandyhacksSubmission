import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
} from "react-native";
const LoginButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={s.appButtonContainer}>
    <Text style={s.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const LoginScreen = ({ nav }) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <SafeAreaView style={s.backgroundStyle}>
      <View style={{ flex: 1.5, top: 80 }}>
        <Image
          resizeMode={"stretch"}
          source={require("../../assets/logo.png")}
          style={s.logo}
        ></Image>
        <Text style={s.header}>ANYWHERE.</Text>
      </View>
      <View style={{ flex: 2 }}>
        <TextInput
          style={s.input}
          onChangeText={(text) => onChangeUsername(text)}
          value={username}
          placeholder="Username"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={s.input}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
        />
        <LoginButton
          title={"Login"}
          onPress={() => {
            nav.navigate("Home");
          }}
        ></LoginButton>
        <LoginButton
          title={"Register"}
          onPress={() => {
            nav.navigate("Register");
          }}
        ></LoginButton>
      </View>
    </SafeAreaView>
  );
};
const s = require("../style/global-style.js");

export default LoginScreen;
