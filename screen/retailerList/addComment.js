import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";

import * as addCommentAction from "../../redux/action/addCommentAction";
import catchDispatch from "./../../utils/catchDispatch";

import { useDispatch } from "react-redux";
const App = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const { id } = props.route.params;

  const addComment = (comment, id) => {
    catchDispatch(
      dispatch(addCommentAction.addComment(comment, id)),
      `Comment Added: ${comment}`,
      props.navigation.navigate("RetailerName")
    );
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={styles.centerd}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView>
      <Text style={styles.header}>Write Comment here</Text>
      <TextInput
        style={styles.commentContainer}
        placeholder="Add comment here"
        multiline
        onChangeText={(text) => setComment(text)}
      />

      <Button
        style={styles.button}
        title="Save comment"
        onPress={() => {
          setIsLoading(true);
          addComment(comment, id);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 19,
    marginTop: 12,
    textAlign: "center",
    justifyContent: "center",
  },
  centerd: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  commentContainer: {
    shadowColor: "black",
    paddingStart: 15,
    paddingEnd: 14,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 5,
    height: 350,
    margin: 20,
    fontSize: 25,
  },
  button: {
    margin: 20,
    width: 50,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;
