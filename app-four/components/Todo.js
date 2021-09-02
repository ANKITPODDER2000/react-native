import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }
    
    handlePress(){
        Alert.alert("Oops" , "Have You done your todo ?" , [
            {text : 'Yes' , onPress : () => {
                this.props.deleteTodo(this.props.obj.key);
            }},
            {text : 'No'}
        ])
    }
    render() {
        // console.log(this.props.obj);
        return (
            <View style={styles.container}>
                <Text style={{paddingHorizontal : 20}}>{this.props.obj.title}</Text>
                <TouchableOpacity onPress = {this.handlePress}>
                    <View style={styles.closebtn}>
                        <Text>X</Text>
                    </View>
                </TouchableOpacity>
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