import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/Login.js";
import HomeScreen from "./src/screens/Home.js";

function Login({ navigation }) {
  return <LoginScreen nav={navigation}></LoginScreen>;
}
function Home({ navigation }) {
  return <HomeScreen nav={navigation}></HomeScreen>;
}

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
