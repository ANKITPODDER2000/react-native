import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';

export default function App() {
    const [name , setName] = useState('');
    const [age  , setAge ] = useState(null);
    return (
        <View style={styles.container}>
            <Text>Enter name : </Text>
            <TextInput 
                style={styles.inputField}
                placeholder = "Enter name ..."
                onChangeText = {name => setName(name)}
            />
            <Text>Enter age : </Text>
            <TextInput 
                style={styles.inputField}
                placeholder = "Enter age ..."
                keyboardType='numeric'
                onChangeText = {val => setAge(val)}
            />
            {age !== null || name !== '' ? <Text>Name : {name} Age : {age}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField : {
      borderWidth : 2,
      borderColor : "#777",
      width : 200,
      padding : 10,
      margin : 10
  }
});
