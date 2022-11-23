import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import EditTransaction from "./EditTransaction";

const ShowList = ({ list, type }) => {

  let panelStyle;
  switch (type) {
    case "e":
      panelStyle = styles.entryPanel;
      break;
    case "s":
      panelStyle = styles.spentPanel;
      break;
  }
  return (
    <FlatList
      style={panelStyle}
      data={list}
      renderItem={(element) => {
        return (
          <View style={styles.transaction}>
            <EditTransaction transactionInfo={element.item} id={element.index} />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  transaction: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    marginTop: 10,
    width: "80%",
  },
  entryPanel: {
    backgroundColor: "#51D190",
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  spentPanel: {
    backgroundColor: "#DA6590",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: "80%",
    width: "100%",
  },
  edit: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderRadius: 20,
    height: 200,
    margin: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ShowList;
