import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Pressable,
  Text,
  Image,
  View,
  Modal,
  TextInput,
} from "react-native";

const ShowList = ({ list, type }) => {
  const [editMode, setEditMode] = useState(false);

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
        const editDescriptionHandle = (value) => {
          element.item.description = value == "" ? element.item.description : value
        }
        return (
          <View style={styles.transaction}>
            <Text>{element.item.amount}</Text>
            <Pressable onPress={() => setEditMode(true)}>
              <Image
                style={styles.image}
                source={require("../assets/images/edit.png")}
              ></Image>
            </Pressable>
            <Modal
              visible={editMode}
              animationType="slide"
              onRequestClose={() => setEditMode(false)}
            >
              <View style={styles.edit}>
                <TextInput 
                placeholder={element.item.description}
                onChangeText={editDescriptionHandle}
                />
                <Text>{element.item.description}</Text>
                <Text>{element.item.date}</Text>
              </View>
            </Modal>
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
    justifyContent: "space-evenly",
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
  image: {
    height: 30,
    width: 30,
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
