import React from 'react';
import { useState } from 'react';
import { Pressable, StyleSheet, ScrollView, Text, View } from 'react-native';

const TransactionList = () => {
    
    const [show, setShow] = useState(true)
    const [entryList, setEntryList] = useState([])
    const [spentList, setSpentList] = useState([])

    const entry = <ScrollView style={styles.entryPanel}>{entryList.map(() => (<View style={styles.transaction}><Text>{transaction.date}</Text></View>))}</ScrollView>
    const spent = <ScrollView style={styles.spentPanel}>{spentList.map(() => (<View style={styles.transaction}><Text>{transaction.date}</Text></View>))}</ScrollView>
  
    return (
        <View style={styles.transactionList}>
            <View style={styles.selector}>
            <Pressable onPress={() => setShow(true)} style={[styles.selectionStyle, styles.entryColor, styles.btl10]}/>
            <Pressable onPress={() => setShow(false)} style={[styles.selectionStyle, styles.spentColor, styles.btr10]}/>
            </View>
            
            {show ? entry : spent}
            
        </View>
  )
}


const styles = StyleSheet.create({
    transactionList: {
        borderRadius: 10,
        height: '50%',
        margin: 50,
        width: '90%',
      },
      selector: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: '20%',
        width: '100%',
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
})

export default TransactionList