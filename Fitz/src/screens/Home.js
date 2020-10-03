import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  RefreshControl,
  FlatList,
} from "react-native";
import { Rating } from "react-native-ratings";

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
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ padding: 20 }}
          keyExtractor={(item) => item.id}
          data={trainer.categories}
          renderItem={({ item }) => {
            return <Text style={{ fontSize: 15 }}>{item}</Text>;
          }}
        ></FlatList>
      </View>
    </View>
  );
};

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function HomeScreen({ route, nav }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: 5, backgroundColor: "white" }}>
      {}
      <FlatList
        data={require("../dummy/cards.js")}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Trainer", { item });
              }}
            >
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
}
const s = require("../style/global-style.js");

export default HomeScreen;
