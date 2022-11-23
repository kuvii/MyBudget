import {React, useState} from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import DatePicker from "react-native-modern-datepicker";

const TransactionInput = ({transaction, setTransaction, showModal, setShowModal, entryList, setEntryList, spentList, setSpentList}) => {

    const [selectedDate, setSelectedDate] = useState("")
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
  return (
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
  )
}

const styles = StyleSheet.create({
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
      }
})

export default TransactionInput