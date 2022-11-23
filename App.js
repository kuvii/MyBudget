import { useState } from 'react';
import { Pressable,  StyleSheet, Text, View} from 'react-native';
import  TransactionList  from './components/TransactionList';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const initTransaction = {
    id: uuidv4(),
    amount: 0,
    description: "",
    date: ""
  }

  const [transaction, setTransaction] = useState(initTransaction)
  const [totalBalance, setTotalBalance] = useState(0)

  const balanceStyle = totalBalance >= 0 ? styles.positiveAmount : styles.negativeAmount
  return (
    <View style={styles.container}>

      <View style={styles.totalBalanceStyle} >
        <Text style={styles.actualBalance}>Saldo Actual:</Text>
        <Text style={balanceStyle} >{totalBalance}</Text>
      </View>

      <TransactionList transaction={transaction} setTransaction={setTransaction}  setTotalBalance={setTotalBalance} />

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 35,
  },
  totalBalanceStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'column',
    height: '20%',
    marginTop: 20,
    width: '90%',
  },
  actualBalance: {
    fontSize: 30,
  },
  positiveAmount: {
    color: 'green',
    margin: 20,
    fontSize: 40,
  },
  negativeAmount: {
    color: 'red',
    margin: 20,
    fontSize: 40,
  }

});
