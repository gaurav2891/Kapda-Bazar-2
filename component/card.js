import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import * as retailerAction from "./../redux/action/RetailerAction";

const Card = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const dispatchWrComment = (id) => {
    dispatch(retailerAction.fetchWRComment(id)).then(() => setIsLoading(false));
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        firmName={props.firmName}
        onPress={() => {
          dispatchWrComment(props.id);
          props.navigation.navigate("RetailerDetail", {
            firmName: props.firmName,
            name: props.name,
            clothCategory: props.clothCategory,
            id: props.id,
          });
        }}
      >
        <Text style={styles.text}>{props?.firmName ? props.firmName : ""}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 2, height: 2 },
    // shadowRadius: 18,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    elevation: 9,
    height: 45,
    margin: 10,
    // marginTop: 15,
  },
  name: {
    padding: 10,
  },
  text: {
    paddingStart: 10,
    paddingTop: 8,
    fontWeight: "900",
    fontSize: 20,
  },
});
export default Card;
