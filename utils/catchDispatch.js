import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

const catchDispatch = async (dispatch, data, func) => {
  return dispatch
    .then((res) => {
      if (res.status === "FAILED" || res.status === "error") {
        Alert.alert("Fail", res.message);
      } else if (res.status === "SUCCESS") {
        Alert.alert("Success", ` ${data}`);
        func;
      }
    })
    .catch((err) => {
      Alert.alert("Failed", ` ${err.message} , try again later`);
    });
};

module.exports = catchDispatch;
