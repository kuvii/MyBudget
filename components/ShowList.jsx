import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ShowList = ({list, type}) => {
    let panelStyle
    switch (type){
        case "e":
            panelStyle = styles.entryPanel
            break
        case "s":
            panelStyle = styles.spentPanel
            break
    }
  return (
      <FlatList
        style={panelStyle}
        data={list}
        renderItem={(element) => {
          const { key, value } = element.item.amount;

          return (
            <View key={key} style={styles.transaction}>
              <Text>{element.item.amount}</Text>
              <Text>{element.item.description}</Text>
              <Text>{element.item.date}</Text>
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
    justifyContent: "center",
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
  }
});

export default ShowList;
