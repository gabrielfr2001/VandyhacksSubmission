"use strict";

var React = require("react-native");

var { StyleSheet } = React;

const primaryColor = "#2196F3";
const secondaryColor = "#2F96FF";
const backgroundColor = "white";
const foregroundColor = "white";
const border = "black";

const headerTextSize = 25;
const normalTextSize = 20;
const smallTextSize = 15;

//Base
const baseComponent = {
  elevation: 5,
  borderRadius: 10,
  padding: 10,
  margin: 10,
  width: "80%",
  alignSelf: "center",
};

module.exports = StyleSheet.create({
  //Buttons
  standardButton: {
    ...baseComponent,
    backgroundColor: primaryColor,
  },

  buttonText: {
    color: foregroundColor,
    alignSelf: "center",
    fontSize: normalTextSize,
    textTransform: "uppercase",
  },

  //Input

  inputText: {
    ...baseComponent,
    backgroundColor: backgroundColor,
    borderColor: border,
    fontSize: smallTextSize,
    borderWidth: 1,
  },

  //Cards

  //Modal

  //Texts

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#2196F3",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "80%",
    borderColor: "black",
    borderWidth: 0,
    alignSelf: "center",
    padding: 10,
    margin: 10,
    elevation: 5,
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  cardProfileImage: {
    width: 60,
    height: 60,
    alignSelf: "center",
    borderRadius: 100,
  },
  card: {
    paddingTop: 15,
    paddingBottom: 15,
    margin: 5,
    elevation: 3,
    backgroundColor: "white",
    color: "white",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    //borderWidth: 1,
    flex: 1,
    //borderColor: "black",
    borderRadius: 10,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
  },
});
