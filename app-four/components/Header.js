import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.text}> My TodoApp </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        position : 'relative',
        width : '100%',
        height : 70,
        backgroundColor : '#262254',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        fontWeight : 'bold'
    },
    text : {
        color : "#fff",
        fontWeight : "bold",
        fontSize : 22,
        letterSpacing : 2
    }
})