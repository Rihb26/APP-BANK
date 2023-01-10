import React from 'react';
import {StyleSheet} from 'react-native';
import AppStack from './src/navigation/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation/routes';

const App = () => {
  return <SafeAreaView style={style.root}>
    <Navigation />
  </SafeAreaView>;


};

export default App;
 const style = StyleSheet.create({
  root: {
    flex: 1,
    
  },
});