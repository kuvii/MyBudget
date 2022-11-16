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
  const [entryList, setEntryList] = useState([])
  const [spentList, setSpentList] = useState([])



  const entry = <ScrollView style={styles.entryPanel}>{entryList.map(() => (<View style={styles.transaction}><Text>{transaction.date}</Text></View>))}</ScrollView>
  const spent = <ScrollView style={styles.spentPanel}>{spentList.map(() => (<View style={styles.transaction}><Text>{transaction.date}</Text></View>))}</ScrollView>
  
  return (
    <View style={styles.container}>

      <View style={styles.totalBalanceStyle} >
        <Text style={styles.actualBalance}>Saldo Actual:</Text>
        <Text style={styles.amount} >{totalBalance}</Text>
      </View>

      <View style={styles.transactionList}>
        <View style={styles.selector}>
          <Pressable onPress={() => setShow(true)} style={[styles.selectionStyle, styles.entryColor, styles.btl10]}/>
          <Pressable onPress={() => setShow(false)} style={[styles.selectionStyle, styles.spentColor, styles.btr10]}/>
        </View>
        
        {show ? entry : spent}
        
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
  selector: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: '20%',
    width: '100%',
  },
  transactionList: {
    borderRadius: 10,
    height: '50%',
    margin: 50,
    width: '90%',
  },
  selectionStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '50%',
  },
  entryPanel: {
    backgroundColor: "#51D190",
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  spentPanel: {
    backgroundColor: "#DA6590",
    width: '100%',
    height: '80%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  entryColor: {
    backgroundColor: "#51D175"
  },
  spentColor: {
    backgroundColor: "#DA6565"
  },
  btl10: {
    borderTopLeftRadius: 10,
  },
  btr10: {
    borderTopRightRadius: 10,
  },
  transaction: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
    width: '80%',
  }
});
