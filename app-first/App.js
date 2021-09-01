import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
	const [msg , setMsg] = useState("Please Subscribe my channel !!!");
	const [btnConf , setBtnConf] = useState({color : 'red' , text: 'Subscribe !' , isClicked : false});
	const handlePress = () => {
		if(!btnConf.isClicked){
			setMsg('Thanks for subscribing !!!');
			setBtnConf({color : 'blue' , text : "Thanks !" , isClicked : !btnConf.isClicked});
		}
		else{
			alert("You have alredy subscribed ...");
		}
	}
	return(
		<View style={styles.mainContainer}>
			<Text style={{marginBottom:10}}>Hey I'm
				<Text style={styles.boldtext}> Ankit Podder</Text> ....
			</Text>
			<Text>{msg}</Text>
			<View style = {styles.btn}>
				<Button color={btnConf.color} onPress={handlePress} title={btnConf.text}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	boldtext : {
		fontSize : 20
	},
	btn : {
		marginTop : 20
	}
})