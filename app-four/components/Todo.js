import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class Todo extends Component {
    handlePress(){
        Alert.alert("Oops" , "Have You done your todo ?" , [
            {text : 'Yes' , onPress : () => console.log("Great Job!!")},
            {text : 'No' , onPress : () => console.log("Not Done!!!")}
        ])
    }
    render() {
        // console.log(this.props.obj);
        return (
            <View style={styles.container}>
                <Text style={{paddingHorizontal : 20}}>{this.props.obj.title}</Text>
                <View style={styles.closebtn}>
                    <TouchableOpacity onPress = {this.handlePress}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        position : "relative",
        width : '80%',
        marginHorizontal : '10%',
        marginVertical : 5,
        height : 50,
        display : "flex",
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        backgroundColor : '#00f4'
    },
    closebtn : {
        width : 50,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#00f6',
        height : '100%'
    }
})