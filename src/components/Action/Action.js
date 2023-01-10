  import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
  import React from 'react';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import {useNavigation} from '@react-navigation/native';
  import TransactionDays from '../TransactionDays/TransactionDays';
  
  const windowHeight = Dimensions.get('window').height;
  const Action= () => {
    const navigation = useNavigation();
    return (
      <ScrollView style={StyleSheet.root}>
        
        <View style={styles.header}>
          <View style={styles.headerItems}>
            <TouchableOpacity style={styles.headerItems_item_inactive} onPress={() => navigation.navigate('Dashboard')}>
              <AntDesign
                name="wallet"
                size={20}
                color="#fff"
                style={{marginRight: 5}}
              />
              <Text style={styles.headerItems__text_unactive}>Compte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerItems_item}>
              <AntDesign
                name="creditcard"
                size={20}
                color="#fff"
                style={{marginRight: 5}}
              />
              <Text style={styles.headerItems__text}>Transactions</Text>
            </TouchableOpacity>
          </View>
  
        
          <View style={styles.accountView}>
            <Text style={styles.accountValue}>Solde Actuel</Text>
            <View style={styles.accountValue_Icon}>
              <FontAwesome
                name="euro"
                size={20}
                color="#fff"
                style={{marginRight: 5}}
              />
              <Text style={styles.accountValue}>2.000</Text>
            </View>
          </View>
          
        </View>
        
  
        
  
        <TransactionDays title="Aujourd'hui" />
        <TransactionDays title="Hier" />
        <TransactionDays title="08/01/2023" />
      </ScrollView>
    );
  };
  

  
  const styles = StyleSheet.create({
    root: {
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: 'skyblue',
      height: windowHeight * 0.2,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      paddingHorizontal: 40,
    },
    headerItems: {
      marginTop: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerItems_item: {
      flexDirection: 'row',
      backgroundColor: '#1a5ff7',
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginRight: 5,
      borderRadius: 15,
    },
    headerItems_item_inactive: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginRight: 5,
      borderRadius: 15,
    },
    headerItems__text: {
      color: 'white',
      fontFamily: 'OpenSans-Bold',
    },
    headerItems__text_unactive: {
      color: 'white',
      fontFamily: 'OpenSans-Bold',
    },
  
    accountView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
      paddingHorizontal: 15,
    },
    accountValue: {
      color: '#fff',
      fontFamily: 'OpenSans-Regular',
      fontSize: 18,
    },
    accountValue_Icon: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  export default Action;