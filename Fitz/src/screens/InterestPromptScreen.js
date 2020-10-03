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

const Card = ({ item, color }) => {
  console.log(color);
  return (
    <View
      style={[
        s.card,
        {
          width: "90%",
          alignSelf: "center",
          justifyContent: "center",
          padding: 20,
          margin: 10,
        },
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text
        style={{
          color: "black",
          alignSelf: "center",
        }}
      >
        {item.name}
      </Text>
    </View>
  );
};

const InterestPromptScreen = ({ nav }) => {
  const selected = "#f2f2f2";
  const unselected = "white";

  const interests = require("../dummy/interests.js");
  const [array, setArray] = React.useState(new Array(interests.length).fill(0));
  const [colorArray, setColorArray] = React.useState(
    new Array(interests.length).fill(unselected)
  );
  React.useEffect(
    () =>
      nav.addListener("beforeRemove", (e) => {
        e.preventDefault();
      }),
    [nav]
  );

  return (
    <View style={{ flex: 1, paddingTop: 5, backgroundColor: 'white' }}>
      <View style={{ elevation: 10, padding: 10 }}>
        <Text style={{ fontSize: 20, padding: 10 }}>
          Choose the categories you are interested in
        </Text>
      </View>
      <FlatList
        style={{ padding: 20 }}
        data={interests}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ width: "100%", flex: 1 }}
              onPress={() => {
                let temp = JSON.parse(JSON.stringify(array));
                temp[interests.indexOf(item)] =
                  temp[interests.indexOf(item)] === 1 ? 0 : 1;
                setArray(temp);
                let temp1 = JSON.parse(JSON.stringify(colorArray));
                temp1[interests.indexOf(item)] =
                  temp1[interests.indexOf(item)] === selected ? unselected : selected;
                setColorArray(temp1);
                console.log(temp1);
              }}
            >
              <Card
                item={item}
                color={colorArray[interests.indexOf(item)]}
              ></Card>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => interests.indexOf(item)}
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
