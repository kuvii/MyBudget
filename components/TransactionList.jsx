import React from "react";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import  ShowList  from './ShowList'
import TransactionInput from './TransactionInput'

const TransactionList = ({ transaction, setTransaction, setTotalBalance }) => {
  const [show, setShow] = useState(true)
  const [entryList, setEntryList] = useState([])
  const [spentList, setSpentList] = useState([])
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(!showModal)
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
          style={styles.entrySelection}
        />
        <Pressable
          onPress={() => setShow(false)}
          style={styles.spentSelection}
        />
      </View>

      {show ? <ShowList list={entryList} type="e"/> : <ShowList list={spentList} type="s"/>}

      <TransactionInput 
      transaction={transaction} 
      setTransaction={setTransaction} 
      showModal={showModal} 
      setShowModal={setShowModal} 
      entryList={entryList}
      setEntryList={setEntryList}
      spentList={spentList}
      setSpentList={setSpentList}
      />

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
  entrySelection:{
    alignItems: "center",
    backgroundColor: "#51D175",
    borderTopLeftRadius: 10,
    justifyContent: "center",
    height: "100%",
    width: "50%",
  },
spentSelection:{
    alignItems: "center",
    backgroundColor: "#DA6565",
    borderTopRightRadius: 10,
    justifyContent: "center",
    height: "100%",
    width: "50%",
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
