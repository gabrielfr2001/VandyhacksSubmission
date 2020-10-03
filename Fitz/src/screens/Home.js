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
  StyleSheet,
  Button,
  TextInput,
  Alert,
  FlatList,
} from "react-native";

const HomeScreen = ({ nav }) => {
  return (
    <SafeAreaView style={s.backgroundStyle}>
      <ScrollView style={s.scrollView}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const s = require("../style/global-style.js");

export default HomeScreen;
