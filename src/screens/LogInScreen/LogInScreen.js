import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Rihab from '../../../assets/images/bank.webp';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import {useNavigation} from '@react-navigation/native';

const LogInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onPressLogIn = () => {
    console.log('Log In');
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Rihab} resizeMode="contain" />
      <Text style={styles.Text}>Consulter votre solde en un clin d'oeil</Text>
      <CustomInput
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      {/*<TextInput placeholder="Password" />*/}
      <CustomButton
        text="Log In"
        type = "Primary"
        onPress={() => {
          onPressLogIn();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 300,
    height: 300,
    
  },
  Text : {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'black',
  },

});

export default LogInScreen;
