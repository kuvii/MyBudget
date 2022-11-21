import React from "react";
import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  View,
  FlatList,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import  ShowList  from './ShowList'

const TransactionList = ({ transaction, setTransaction, setTotalBalance }) => {
  const [show, setShow] = useState(true)
  const [entryList, setEntryList] = useState([])
  const [spentList, setSpentList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")

  const openModal = () => {
    setShowModal(!showModal)
  }
  const changeDescriptionHandle = (value) => {
    setTransaction({ ...transaction, description: value })
  }
  const changeAmountHandle = (value) => {
    setTransaction({ ...transaction, amount: value })
  }
  const changeDateHandle = (value) => {
    setTransaction({...transaction, date: value})
  }

  const submitHandle = () => {
    const obj = { ...transaction }
    transaction.amount >= 0
      ? setEntryList([...entryList, obj])
      : setSpentList([...spentList, obj])
    setTransaction({ ...transaction, amount: 0, description: "", date: "" })
  }

  const calculateTotalBalance = () => {
    const negativeBalance = spentList
      .map((x) => {
        return parseFloat(x.amount)
      })
      .reduce((acc, current) => acc + current, 0)
      
    const positiveBalance = entryList
      .map((x) => {
        return parseFloat(x.amount)
      })
      .reduce((acc, current) => acc + current, 0)
    const result = positiveBalance + negativeBalance
    setTotalBalance(result)
  }

  calculateTotalBalance()

  return (
    <View style={styles.transactionList}>
      <View style={styles.selector}>
        <Pressable
          onPress={() => setShow(true)}
          style={[styles.selectionStyle, styles.entryColor, styles.btl10]}
        />
        <Pressable
          onPress={() => setShow(false)}
          style={[styles.selectionStyle, styles.spentColor, styles.btr10]}
        />
      </View>

      {show ? <ShowList list={entryList} type="e"/> : <ShowList list={spentList} type="s"/>}

      <Modal
        animationType="fade"
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View style={styles.modalStyle}>
          <Text>Nueva Transaccion</Text>
          <TextInput
            placeholder="Cantidad"
            keyboardType="number-pad"
            onChangeText={changeAmountHandle}
            value={transaction.amount}
          />
          <TextInput
            placeholder="Descripcion"
            keyboardType="default"
            onChangeText={changeDescriptionHandle}
            value={transaction.description}
          />
          <DatePicker 
          onSelectedChange={date =>  setSelectedDate(date)}
          onDateChange={changeDateHandle}
          value={transaction.date}
          />
          <Button title="submit" onPress={submitHandle} />
        </View>
      </Modal>

      <Pressable onPress={() => openModal()}>
        <View style={styles.addTransactionButtonStyle}>
          <Text>Nueva transaccion</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionList: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    height: "50%",
    margin: 50,
    width: "90%",
  },
  selector: {
    alignItems: "flex-start",
    flexDirection: "row",
    height: 60,
    width: "100%",
  },
  selectionStyle: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "50%",
  },
  entryColor: {
    backgroundColor: "#51D175",
  },
  spentColor: {
    backgroundColor: "#DA6565",
  },
  btl10: {
    borderTopLeftRadius: 10,
  },
  btr10: {
    borderTopRightRadius: 10,
  },
  modalStyle: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderRadius: 20,
    height: 470,
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
  addTransactionButtonStyle: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    height: 60,
    width: 180,
    marginTop: 30,
  },
});

export default TransactionList;
