  import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native';
  import React from 'react';
  import {useNavigation} from '@react-navigation/native';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  
  const windowHeight = Dimensions.get('window').height;
  const Detail = () => {
    const navigation = useNavigation();
    return (
      <ScrollView style={styles.root}>
        <View style={styles.header}>
         <View style={styles.headerItems}>
            <TouchableOpacity style={styles.headerItems_item}>
              <AntDesign
                name="wallet"
                size={20}
                color="#fff"
                style={{marginRight: 5}}
              />
              <Text style={styles.headerItems__text}>Compte</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerItems_item_inactive}
              onPress={() => navigation.navigate('Transaction')}>
              <AntDesign
                name="creditcard"
                size={20}
                color="#fff"
                style={{marginRight: 5}}
              />
              <Text style={styles.headerItems__text_unactive}>Transactions</Text>
            </TouchableOpacity>
          </View>
  
  
          <View style={styles.accountView}>
            <FontAwesome
              name="euro"
              size={30}
              color="green"
              style={{marginRight: 5}}
            />
            <Text style={styles.accountText}> 2.000</Text>
          </View>
        </View>
  
    
  
        <View style={styles.topViewContainer}>
          <View style={styles.topCard}>
            <View style={styles.topCardRow}>
              <TouchableOpacity style={styles.topCardRow__item}>
                <AntDesign name="pluscircleo" size={30} color="green" />
                <Text style={styles.topCardRow__item_text}>Deposer</Text>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.topCardRow__item}>
                <AntDesign name="minuscircleo" size={30} color="red" />
  
                <Text style={styles.topCardRow__item_text}>Retirer</Text>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.topCardRow__item}>
                <FontAwesome name="exchange" size={30} color="blue" />
  
                <Text style={styles.topCardRow__item_text}>Echanger</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
  
        
  
        <View style={styles.accountTextContainer}>
          <Text style={styles.accountTextContainer_text}> Mes comptes courants</Text>
        </View>
  
        
        <View>
          <TouchableOpacity style={styles.accountList_item}>
            <View style={styles.accountList_item_image_text}>
              <Image
                source={require('../../../assets/images/bank.webp')}
                style={{width: 20, height: 20, marginRight: 10}}
              />
              <View>
                <Text style={styles.account_libelle}>Compte Bancaire</Text>
                <Text>N°****3216</Text>
              </View>
            </View>
  
            <AntDesign name="arrowright" size={20} color="#153ee7" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountList_item}>
            <View style={styles.accountList_item_image_text}>
              <Image
                source={require('../../../assets/images/bank.webp')}
                style={{width: 20, height: 20, marginRight: 10}}
              />
              <View>
                <Text style={styles.account_libelle}>CB Visa</Text>
                <Text>N°****3216 Débit immédiat</Text>
              </View>
            </View>
  
            <AntDesign name="arrowright" size={20} color="#153ee7" />
          </TouchableOpacity>
  
          <View style={styles.createAccountContainer}>
            <TouchableOpacity style={styles.createAccountContainer_icon_text}>
              <AntDesign
                name="plus"
                size={20}
                color="blue"
                style={{marginRight: 5}}
              />
              <Text>Ajouter un compte</Text>
            </TouchableOpacity>
          </View>
        </View>
  
  
  
        <View style={styles.accountTextContainer}>
          <Text style={styles.accountTextContainer_text}>
            Eparnage et Investissement
          </Text>
        </View>
  
        <View>
          <TouchableOpacity style={styles.lastTransactionItem}>
            <View>
              <Text style={styles.lastTransactionItem_text}> Découvrie l'éparnage</Text>
              <Text>Vous ne diposez d'aucun produit d'éparnage</Text>
            </View>
  
            <AntDesign name="arrowright" color="#154ee7" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.lastTransactionItem}>
            <View>
              <Text style={styles.lastTransactionItem_text}> Assurer</Text>
              <Text>Gérer vos contrat et télécharger vos documents</Text>
            </View>
  
            <AntDesign name="arrowright" color="#154ee7" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.lastTransactionItem}>
            <View>
              <Text style={styles.lastTransactionItem_text}> Cashback</Text>
              <Text>Découvrir le Cashback</Text>
            </View>
  
            <AntDesign name="arrowright" color="#154ee7" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.lastTransactionItem}>
            <View>
              <Text style={styles.lastTransactionItem_text}> Comptes externes</Text>
              <Text>Vous n'avez ajouté aucun compte externe</Text>
            </View>
  
            <AntDesign name="arrowright" color="#154ee7" size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  
  const styles = StyleSheet.create({
    root: {
      backgroundColor: 'white',
    },
  
    header: {
      backgroundColor: 'skyblue',
      height: windowHeight * 0.3,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      paddingHorizontal: 20,
    },
    headerItems: {
      marginTop: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerItems_item: {
      flexDirection: 'row',
      backgroundColor: '#0e39c8',
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginRight: 5,
      borderRadius: 15,
    },
    headerItems_item_inactive: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginRight: 10,
      borderRadius: 15,
    },
    headerItems__text: {
      color: '#fff',
      fontFamily: 'OpenSans-Regular',
    },
    headerItems__text_unactive: {
      color: '#fff',
      fontFamily: 'OpenSans-Regular',
    },
  
    accountView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
  
    accountText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'green',
      fontFamily: 'OpenSans-Regular',
    },
  
    topViewContainer: {left: 0, right: 0, height: 90, marginTop: -45},
    topCard: {
      backgroundColor: '#fff',
      paddingVertical: 30,
      paddingHorizontal: 30,
      marginHorizontal: 20,
      borderRadius: 5,
      marginTop: 4,
      flexDirection: 'row',
      alignItems: 'center',
    },
    topCardRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    topCardRow__item: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    topCardRow__item_text: {
      fontWeight: 'bold',
      fontFamily: 'OpenSans-Regular',
    },
  
    accountTextContainer: {
      padding: 15,
      marginTop: 15,
    },
    accountTextContainer_text: {
      color: 'blue',
      fontWeight: 'bold',
      fontFamily: 'OpenSans-Regular',
    },
  
    accountList_item: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#edf1f2',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    accountList_item_image_text: {
      flexDirection: 'row',
      alignItems: 'center',
      fontWeight: 'bold',
    },
    account_libelle: {
      fontWeight: 'bold',
      fontFamily: 'OpenSans-Regular',
      color: 'black',
    },
  
    createAccountContainer: {
      backgroundColor: '#fffp',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#edf1f2',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    createAccountContainer_icon_text: {
      borderWidth: 1,
      borderColor: 'black',
      flexDirection: 'row',
      padding: 12,
      borderRadius: 30,
    },
  
    lastTransactionItem: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#edf1f2',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    lastTransactionItem_text: {
      fontWeight: 'bold',
      fontFamily: 'OpenSans-Regular',
      color: 'black',
    },
  });

  export default Detail;