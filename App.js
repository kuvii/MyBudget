import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const initTransaction = {
    amount: 0,
    description: "",
    date: ""
  }
  const [transaction, setTransaction] = useState(initTransaction)
  const [show, setShow] = useState(true)

  const [totalBalance, setTotalBalance] = useState(0)
  const [list, setList] = useState([])

  const addTransaction = (newTransaction) => {
    setList([...list, newTransaction])
  }
  return (
    <View style={styles.container}>

      <View style={styles.totalBalanceStyle} >
        <Text style={styles.actualBalance}>Saldo Actual:</Text>
        <Text style={styles.amount} >{totalBalance}</Text>
      </View>

      
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
});
