import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View>
        {/* FIRMNAME_FORMAT */}
        {props.firmName ? (
          <View style={styles.head}>
            <Text
              style={{
                fontSize: 19,
                // borderWidth: 2,
                color: "black",
                padding: 4,
                backgroundColor: "#f0efeb",
                fontWeight: "bold",
                // maxWidth: 350,
              }}
            >
              Firm Name : {props.firmName ?? ""}{" "}
            </Text>
            {/* <Text style={styles.text}> {props.firmName ?? ""}</Text> */}
          </View>
        ) : (
          <Text></Text>
        )}
        {/* DATE_FORMAT */}
        <Text style={styles.date}>{` ${props?.date ?? "00-00-0000"}`}</Text>

        {/* COMMENT_FORMAT */}
        <Text style={styles.text}>{`Comment:  ${
          props?.comment ?? "NO COMMENTS"
        }`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.75,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    borderRadius: 10,
    backgroundColor: "#f0efeb",
    borderStartColor: "black",
    elevation: 7,
    // borderBottomWidth: 1,
    // borderTopRadius: 20,
    margin: 10,
    paddingBottom: 11,
  },
  name: {
    padding: 10,
    borderRadius: 10,
  },
  date: {
    justifyContent: "flex-end",
    color: "black",
    alignContent: "center",
    backgroundColor: "#ffffff",
    textAlign: "right",
    paddingEnd: 30,

    // fontFamily: "monospace",
    // fontVariant: ["small-caps"],
    fontSize: 20,
  },
  text: {
    // paddingStart: 10,
    paddingTop: 10,
    fontWeight: "900",
    // paddingBottom: 8,
    fontSize: 19,
    color: "black",
    backgroundColor: "#f0efeb",
    opacity: 26,
    // backgroundColor: "lightcyan",
    paddingEnd: 6,
    // paddingHorizontal: 10,
    paddingStart: 15,
    fontFamily: "Roboto",
    fontVariant: ["lining-nums"],
    fontSize: 20,
  },
  head: {
    // borderWidth: 2,
    // display: "flex",

    // justifyContent: "space-evenly ",
    // alignItems: "center",
    flex: 1,
    paddingStart: 17,
    // flexDirection: "default",
    // flexDirection: "column",
  },
  bold: {
    // maxWidth: 350,

    fontWeight: "400",
  },
});
export default Card;
