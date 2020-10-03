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

const Trainer = ({ trainer }) => {
  return (
    <View style={s.card}>
      <View
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      >
        <Image style={s.cardProfileImage} source={trainer.image}></Image>
        <Text
          style={{
            alignSelf: "center",
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          {trainer.name}
        </Text>
        <Rating
          ratingCount={5}
          startingValue={trainer.rating}
          readonly
          imageSize={20}
        />
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const HomeScreen = ({ nav }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [currentTrainer, setCurrentTrainer] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const onPressed = (trainer) => {
    setModalVisible(true);
    setCurrentTrainer(trainer);
  };
  return (
    <View style={{ flex: 1, paddingTop: 5, backgroundColor: "white" }}>
      {/*Modal*/}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={s.centeredView}>
          <View style={s.modalView}>
            <Text>Hello World!</Text>

            <TouchableHighlight
              style={{ ...s.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={s.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      {/*Modal*/}
      <FlatList
        data={require("../dummy/cards.js")}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => onPressed({ item })}>
              <Trainer trainer={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={{
          backgroundColor: "white",
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      ></FlatList>
    </View>
  );
};
const s = require("../style/global-style.js");

export default HomeScreen;
