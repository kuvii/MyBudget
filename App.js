import { useState } from 'react';
import { Pressable,  StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';
import  TransactionList  from './components/TransactionList';

export default function App() {
  const initTransaction = {
    amount: 0,
    description: "",
    date: ""
  }
  const [transaction, setTransaction] = useState(initTransaction)
  const [totalBalance, setTotalBalance] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(!showModal)
  }

  const changeDescriptionHandle = (value) => {
    setTransaction({...transaction, description: value})
  }
  const changeDateHandle = (value) => {
    setTransaction({...transaction, date: value})
  }
  const changeAmountHandle = (value) => {
    setTransaction({...transaction, amount: value})
  }
  const submitHandle = () => {
    console.log(transaction)
    setTransaction({...transaction, amount: 0, description: "", date: ""})
  }
  return (
    <View style={styles.container}>

      <View style={styles.totalBalanceStyle} >
        <Text style={styles.actualBalance}>Saldo Actual:</Text>
        <Text style={styles.amount} >{totalBalance}</Text>
      </View>

      <TransactionList/>

      <Modal
        animationType='fade'
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
        >
      <View style={styles.modalStyle}>
        <Text >Nueva Transaccion</Text>
        <TextInput
        placeholder='Cantidad'
        keyboardType='number-pad'
        onChangeText={changeAmountHandle}
        value={transaction.amount}
        />
        <TextInput
          placeholder='Descripcion'
          keyboardType='default'
          onChangeText={changeDescriptionHandle}
          value={transaction.description}
        />
        <TextInput
        placeholder={new Date().toUTCString()}
        onChangeText={changeDateHandle}
        value={transaction.date}
        />
        <Button title='submit'
        onPress={submitHandle}
        />
        </View>
      </Modal>

    <Pressable onPress={() => changeModal()}>
      <View style={styles.addTransactionButtonStyle}>
        <Text>Nueva transaccion</Text>
      </View>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: '10%',
  },
  totalBalanceStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'column',
    height: '20%',
    marginTop: 10,
    width: '90%',
  },
  actualBalance: {
    fontSize: 30,
  },
  amount: {
    margin: 20,
    fontSize: 40,
  },
  addTransactionButtonStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    height: 60,
    width: '40%',
  },
  modalStyle: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    height: '40%',
    margin: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});
