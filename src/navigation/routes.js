import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LogInScreen from '../screens/LogInScreen/LogInScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Dashboard from '../screens/Dashboard/Dashboard';
import Transaction from '../screens/Transaction/Transaction';
import Deposer from '../Deposer.js/Deposer';
import SignUp from '../screens/SignUp/SignUp';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Deposer" component={Deposer} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
