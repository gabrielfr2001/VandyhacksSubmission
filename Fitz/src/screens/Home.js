import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default class Home extends React.Component {
  render() {
    return (
        <SafeAreaView>
            <Text>Hello World</Text>
        </SafeAreaView>
    );
  }
}