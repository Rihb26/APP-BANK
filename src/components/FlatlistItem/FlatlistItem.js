/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, Image, useWindowDimensions,SafeAreaView,button,TouchableOpacity} from 'react-native';
import Navigation from '../../navigation/routes';
import {useNavigation} from '@react-navigation/native';

const FlatlistItem = ({item}) => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={{width: 300, height: 300, resizeMode: 'contain'}}
      />
      <View style={{flex: 0.4}}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <TouchableOpacity type="Primary" style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.text}>SKIP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  
  image: {
    flex: 0.7,
    justifyContent: 'center',
    width: 300,
    height: 300,

  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
   
    color: '#26474E',
    textAlign: 'center',
  },
  description: {
    fontWeight: '500',
    color: '#1C2942',
    textAlign: 'center',
    paddingHorizontal: 64,
    
  },
  button: {
    backgroundColor: 'skyblue',
    borderRadius: 30,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    width: 200,
    height: 50,
    alignContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FlatlistItem;
