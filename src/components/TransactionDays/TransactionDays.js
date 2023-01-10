import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TransactionDaysItem from './TransactionDaysItems';

const TransactionDays = ({title}) => {
  return (
    <View style={styles.dayContainer}>
     

      <View style={styles.mainTextContainer}>
        <Text style={styles.mainTitle}>{title}</Text>
      </View>



      <TransactionDaysItem
        mainTitle="VIR INSTANTANEE"
        secondaryText="EMIS"
        amount={+800}
      />
      <TransactionDaysItem
        mainTitle="Carte X5098 "
        secondaryText="MONOPRIX"
        amount={-4}
      />
      <TransactionDaysItem
        mainTitle="Carte X5098 "
        secondaryText="TACOS"
        amount={-12}
      />
      <TransactionDaysItem
        mainTitle="Carte X5098 "
        secondaryText="CINE"
        amount={-8}
      />
      <TransactionDaysItem
        mainTitle="Carte A75956 "
        secondaryText="Auchan"
        amount={-25}
      />
      <TransactionDaysItem
        mainTitle="Carte A75956 "
        secondaryText="Auchan"
        amount={-908}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  dayContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f2',
    marginBottom: 5,
  },

  mainTextContainer: {
    marginTop: 15,
  },

  mainTitle: {
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
});
 
export default TransactionDays;