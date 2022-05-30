import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  ActivityIndicator,
  TextInput,
  Alert,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import * as retailerAction from "../../redux/action/RetailerAction";
import * as addCommentAction from "../../redux/action/addCommentAction";
import catchDispatch from "./../../utils/catchDispatch";

import SplashScreen from "../splashScreen";
import CommentCard from "../../component/commentCard";

const App = (props) => {
  let { name, firmName, clothCategory, location, id } = props.route.params;

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(retailerAction.fetchWRComment(id)).then(() => setIsLoading(false));
  }, [dispatch]);

  const wrComment = useSelector((state) => state.retailer.wrComment);

  const deleteComment = (id) => {
    catchDispatch(
      dispatch(addCommentAction.deleteComment(id)),
      "Comment Deleted",
      props.navigation.navigate("RetailerName")
    );
  };

  if (isLoading) {
    return (
      <View style={{ backgroundColor: "pink" }}>
        <SplashScreen message="fetching comment" />
      </View>
    );
  }

  // }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#e6e7e8" }}>
      {/*  OUTLINE DESIGN */}
      <View>
        <Text style={styles.name}>{firmName}</Text>
        <Text style={styles.status}>Retailer : {name} </Text>
        <Text style={styles.status}>Cloth Category : {clothCategory}</Text>
        <Text style={styles.status}>My comment : </Text>
      </View>

      <View style={styles.commentContainer}>
        {wrComment.data == null ||
        wrComment.status === "FAILED" ||
        wrComment.data === 0 ? (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("AddComment", {
                id,
              })
            }
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "200",
                color: "grey",
                justifyContent: "space-between",
                alignItems: "center66666ppol,,,,,,,,,mm       ",
                textDecorationColor: "black",
              }}
              placeholder="Add comment here"
            >
              Add comment here..
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("UpdateComment", {
                wrComment,
                id,
              });
            }}
          >
            <ScrollView>
              <Text style={styles.date}>{wrComment.data.date}</Text>
              <Text
                style={styles.text}
              >{`Comment: ${wrComment.data.comment}`}</Text>
            </ScrollView>
          </TouchableOpacity>
        )}
      </View>

      <View>
        {wrComment.data == null ||
        wrComment.status === "FAILED" ||
        wrComment.data === 0 ? (
          <View>
            <Text></Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("UpdateComment", {
                wrComment,
                id,
              })
            }
          >
            <Text
              style={{
                color: "blue",
                alignSelf: "flex-end",
                fontSize: 20,
                paddingEnd: 14,
              }}
            >
              Update comment
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View>
        <TouchableOpacity
          style={styles.showDetails}
          onPress={() =>
            props.navigation.navigate("ShowDetails", {
              wrComment,
              id,
            })
          }
        >
          <Text
            style={{
              fontSize: 25,
              color: "dimgrey",
            }}
          >
            View Retailer detail
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() =>
            Alert.alert("Delete", "Do you wan to delete your comment", [
              {
                text: "Delete",
                onPress: () => deleteComment(id),
              },
              {
                text: "Cancel",
              },
            ])
          }
        >
          <Text style={{ color: "white", fontSize: 20 }}>
            {" "}
            Delete My comment
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  status: {
    marginTop: 10,
    paddingStart: 10,
    fontSize: 20,
  },
  name: {
    padding: 10,
    fontSize: 30,
  },
  commentContainer: {
    color: "grey",
    shadowRadius: 8,
    borderRadius: 15,
    paddingTop: 18,
    padding: 12,
    marginBottom: 10,
    margin: 15,
    fontSize: 25,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 5,
    // height: "38%",
  },
  comment: {
    fontSize: 24,
    paddingStart: 10,
    marginBottom: 10,
  },

  showDetails: {
    color: "gray",
    // alignSelf: "flex-start",
    alignSelf: "center",
    // backgroundColor: "#94918e",
    fontSize: 44,
    padding: 10,
    margin: 18,

    shadowColor: "#94918e",
    shadowOpacity: 0.25,
    shadowOffset: { width: 4, height: 2 },
    shadowRadius: 8,
    borderRadius: 80,
    elevation: 5,
    borderWidth: 1,
    textDecorationColor: "black",
    backgroundColor: "gainsboro",
  },
  deleteButton: {
    color: "black",
    alignSelf: "center",
    fontSize: 24,
    padding: 10,
    marginBottom: 10,
    shadowColor: "lightcyan",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 80,
    elevation: 5,
    borderBottomWidth: 1,

    backgroundColor: "orangered",
  },
  date: {
    justifyContent: "flex-end",
    color: "black",
    alignContent: "center",
    backgroundColor: "white",
    textAlign: "right",
    paddingEnd: 30,
    fontSize: 20,
  },
  text: {
    paddingStart: 2,
    paddingTop: 10,
    fontWeight: "900",
    fontSize: 19,
    color: "black",
    // backgroundColor: "aliceblue",
    paddingEnd: 5,
    paddingHorizontal: 10,
    paddingStart: 7,
    fontFamily: "Roboto",
    fontVariant: ["lining-nums"],
    fontSize: 20,
  },
  // waitData: {
  //   marginBottom: 22,
  //   marginTop: 15,
  // },
  // centered: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // or: {
  //   justifyContent: "space-between",
  //   fontSize: 25,
  //   textAlign: "center",
  // },
  // description: {
  //   shadowColor: "lightgreen",
  //   shadowOpacity: 0.25,
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 8,
  //   borderRadius: 10,
  //   backgroundColor: "#ffffff",
  //   elevation: 5,
  //   height: 200,
  //   margin: 10,
  // },
  // click: {
  //   fontSize: 16,
  //   marginBottom: 22,
  //   marginTop: 15,
  // },
});

export default App;
