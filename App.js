import { useState } from 'react';
import { Pressable,  StyleSheet, Text, View} from 'react-native';
import  TransactionList  from './components/TransactionList';

export default function App() {
  const initTransaction = {
    amount: 0,
    description: "",
    date: ""
  }

  const [transaction, setTransaction] = useState(initTransaction)
  const [totalBalance, setTotalBalance] = useState(0)



  return (
    <View style={styles.container}>

      <View style={styles.totalBalanceStyle} >
        <Text style={styles.actualBalance}>Saldo Actual:</Text>
        <Text style={styles.amount} >{totalBalance}</Text>
      </View>

      <TransactionList transaction={transaction} setTransaction={setTransaction} />

    
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
