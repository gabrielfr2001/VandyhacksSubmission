import React from "react";
import { View, Text, Image, FlatList, TouchableHighlight } from "react-native";
import { Rating } from "react-native-ratings";

function TrainerScreen({ navigation, route }) {
  return (
    <View style={s.centeredView}>
      <View style={s.modalView}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={s.modalText}>{route.params.item.name}</Text>
            <Image
              style={
                (s.cardProfileImage,
                { width: 150, height: 150, borderRadius: 20 })
              }
              source={route.params.item.image}
            ></Image>
            <Rating
              ratingCount={5}
              startingValue={route.params.item.rating}
              readonly
              imageSize={20}
            />
          </View>
          <View>
            <Text style={(s.modalText, { fontSize: 20, top: 40, padding: 20 })}>
              {'"' + route.params.item.description + '"'}
            </Text>
            <FlatList
              keyExtractor={(item) => item.id}
              style={{ padding: 20, top: 20 }}
              data={route.params.item.categories}
              renderItem={({ item }) => {
                return <Text style={{ fontSize: 20 }}>{item}</Text>;
              }}
            ></FlatList>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 25 }}>Biography</Text>
            <Text>{route.params.item.biography}</Text>
        </View>
        <TouchableHighlight
          style={{ ...s.openButton, backgroundColor: "#2196F3" }}
          onPress={() => {
            navigation.goBack(null);
          }}
        >
          <Text style={s.textStyle}>Close</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
const s = require("../style/global-style.js");

export default TrainerScreen;
