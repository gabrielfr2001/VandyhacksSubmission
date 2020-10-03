"use strict";

var React = require("react-native");

var { StyleSheet } = React;

module.exports = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  input: {
    backgroundColor: "white",
    alignSelf: "center",
    flex: 0.1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
  },
  backgroundStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    textAlign: "center",
    backgroundColor: "white",
    // transform: [{ rotate: "20deg" }],
  },
  header: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
});
