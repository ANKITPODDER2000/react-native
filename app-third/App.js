import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let list = [
    {name : 'John' , key : 1},
    {name : 'Roger' , key : 2},
    {name : 'Margu' , key : 3},
    {name : 'Sam' , key : 4},
    {name : 'Samuel' , key : 5},
    {name : 'Lucky' , key : 6},
    {name : 'Misu' , key : 7},
  ]
  return (
    <View style={styles.container}>
      {/* numColumns */}
      <FlatList 
        keyExtractor = {(item) => item.key}
        data = {list}
        renderItem = {({item}) => (
          <Text style={styles.itemContainer}>{item.name}</Text>
        )}
      />
      {/* {list.map(l => <View style={styles.itemContainer} key={l.key}><Text>{l.name}</Text></View>)} */}
      <StatusBar style="auto" backgroundColor="#fff"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
    paddingTop : 20,
  },
  itemContainer : {
    width : '80%',
    height : 80,
    marginLeft : "10%",
    backgroundColor : 'dodgerblue',
    display : 'flex',
    justifyContent : 'center',
    paddingLeft : 20,
    paddingRight : 20,
    marginTop : 15,
    marginBottom : 15
  }
});
