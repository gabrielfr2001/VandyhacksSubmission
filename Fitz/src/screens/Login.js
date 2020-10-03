import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import CustomButton from "../component/CustomButton";
import CustomInput from "../component/CustomInput";

function LoginScreen({ nav }) {
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
        <CustomInput
          placeholder="Username"
          onChangeText={(text) => onChangeUsername(text)}
          value={username}
        ></CustomInput>
        <CustomInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
        ></CustomInput>
        <CustomButton
          title={"Login"}
          onPress={() => {
            nav.navigate("Home");
          }}
        ></CustomButton>
        <CustomButton
          title={"Register"}
          onPress={() => {
            nav.navigate("Register");
          }}
        ></CustomButton>
      </View>
    </SafeAreaView>
  );
}
const s = require("../style/global-style.js");

export default LoginScreen;
