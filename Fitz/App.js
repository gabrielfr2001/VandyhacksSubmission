import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/Login.js";
import HomeScreen from "./src/screens/Home.js";
import InterestPromptScreen from "./src/screens/InterestPromptScreen.js";
import RegisterScreen from "./src/screens/Register.js";

function Login({ navigation }) {
  return <LoginScreen nav={navigation}></LoginScreen>;
}
function Home({ navigation }) {
  return <HomeScreen nav={navigation}></HomeScreen>;
}
function InterestPrompt({ navigation }) {
  return <InterestPromptScreen nav={navigation}></InterestPromptScreen>;
}
function Register({ navigation }) {
  return <RegisterScreen nav={navigation}></RegisterScreen>;
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
      <Stack.Screen
        name="Interests"
        component={InterestPrompt}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="Register" component={Register} />
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
