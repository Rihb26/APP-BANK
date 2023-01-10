import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TransactionDaysItem = ({mainTitle, secondaryText, amount}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.mainContent}>
        <AntDesign
          name="shoppingcart"
          size={30}
          color="#000"
          style={{marginRight: 15}}
        />
      

        <View>
          <Text style={styles.operationTitle}>{mainTitle}</Text>
          <Text>{secondaryText}</Text>
        </View>
      </View>
      <Text
        style={{
          fontFamily: 'OpenSans-Regular',
          color: amount > 0 ? 'green' : 'red',
          fontSize: 16,
        }}>
        {amount}  €
      </Text>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f2',
  },

  mainContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  operationTitle: {
    color: 'black',
    fontFamily: 'OpenSans-Bold',
    marginBottom: 2,
    fontWeight: 'bold',
  },
  operationSource: {},
});
export default TransactionDaysItem;