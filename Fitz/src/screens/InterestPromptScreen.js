import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  TouchableHighlight,
} from "react-native";

const Card = ({ item, color }) => {
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

function InterestPromptScreen ({ nav }) {
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
    <View style={{ flex: 1, paddingTop: 5, backgroundColor: "white" }}>
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
                  temp1[interests.indexOf(item)] === selected
                    ? unselected
                    : selected;
                setColorArray(temp1);
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
          nav.navigate("Home", {post:"something"});
        }}
      >
        <Text style={s.textStyle}>Finish</Text>
      </TouchableHighlight>
    </View>
  );
};
const s = require("../style/global-style.js");

export default InterestPromptScreen;
