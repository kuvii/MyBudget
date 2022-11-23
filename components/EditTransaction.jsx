import React, { useState } from "react";
import {
  Modal,
  Text,
  Pressable,
  Image,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";

const EditTransaction = ({ transactionInfo, deleteElement, id }) => {
  const [editMode, setEditMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(transactionInfo.date);

  const editDescriptionHandle = (value) => {
    transactionInfo.description =
      value !== "" ? value : transactionInfo.description;
  };
  const editDateHandle = (value) => {
    transactionInfo.date = value;
  };
  return (
    <View style={styles.transaction}>
      <Text>{transactionInfo.amount}</Text>
      <Pressable onPress={() => setEditMode(!editMode)}>
        <Modal visible={editMode} onRequestClose={() => setEditMode(!editMode)}>
          <View style={styles.modalStyle}>
            <Text>Editar Transacción</Text>
            <Text>{transactionInfo.amount}</Text>
            <TextInput
              placeholder={transactionInfo.description}
              onChangeText={(value) => editDescriptionHandle(value)}
              maxLength={30}
            ></TextInput>
            <DatePicker
              onDateChange={(selectedDate) => editDateHandle(selectedDate)}
              selected={transactionInfo.date}
            />
          </View>
        </Modal>
        <Image
          style={styles.image}
          source={require("../assets/images/edit.png")}
        ></Image>
      </Pressable>
      <Pressable onPress={() => deleteElement(transactionInfo.id)}>
        <Image
          style={styles.image}
          source={require("../assets/images/trash.png")}
        ></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  transaction: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  image: {
    height: 30,
    width: 30,
  },
  modalStyle: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    height: 470,
    justifyContent: "space-evenly",
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

export default EditTransaction;
