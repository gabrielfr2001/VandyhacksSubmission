import React, { Component } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import TrainerModal from "../modals/TrainerModal.js";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  RefreshControl,
  FlatList,
  TouchableHighlight,
  VirtualizedList,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

const InterestPromptScreen = ({ nav }) => {
  React.useEffect(
    () =>
      nav.addListener("beforeRemove", (e) => {
        e.preventDefault();
      }),
    [nav]
  );
  return (
    <View style={{ flex: 1, paddingTop: 5, backgroundColor: "white" }}>
      <View style={{ elevation: 10, padding: 10 }}>
        <Text style={{ fontSize: 20, padding: 10 }}>
          Choose the categories you are interested in
        </Text>
      </View>
      <FlatList
        style={{ padding: 20 }}
        data={require("../dummy/interests.js")}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ width: "100%", flex: 1 }}
              onPress={() => {}}
            >
              <View
                style={[
                  s.card,
                  {
                    width: "90%",
                    alignSelf: "flex-start",
                    padding: 20,
                    margin: 10,
                  },
                ]}
              >
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={{
          backgroundColor: "white",
        }}
      ></FlatList>
      <TouchableHighlight
        style={{
          ...s.openButton,
          backgroundColor: "#2196F3",
          padding: 20,
          margin: 5,
        }}
        onPress={() => {
          nav.navigate("Home");
        }}
      >
        <Text style={s.textStyle}>Finish</Text>
      </TouchableHighlight>
    </View>
  );
};
const s = require("../style/global-style.js");

export default InterestPromptScreen;
