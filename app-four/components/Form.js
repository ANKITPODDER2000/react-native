import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
             title : ''
        }
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }
    handleChangeText(val){
        this.setState({
            title : val
        })
    }
    handlePress(){
        if(this.state.title.length < 3){
            Alert.alert(
                "Write title properly!!",
                "Please set todo title properly ..."
            )
            return;
        }
        this.props.addNewTodo(this.state.title);
        this.setState({
            title : ''
        })
    }
    render() {
        return (
            <View style={styles.contaier}>
                <View style={styles.inputField}>
                    <TextInput
                        placeholder="Enter Todo title ..."
                        style={{width : 200}}
                        value={this.state.title}
                        onChangeText={val => this.handleChangeText(val)}
                    />
                    <TouchableHighlight 
                        style={styles.delbtn}
                        onPress={this.handlePress}
                    >
                        <View>
                        <Ionicons name="add" size={24} color="#fff" />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contaier : {
        position : 'relative',
        width : '80%',
        marginHorizontal : '10%',
        marginVertical : 20
    },
    inputField : {
        position : 'relative',
        width : '100%',
        height : 30,
        paddingLeft : 10,
        borderBottomWidth : 2,
        borderColor : '#fff',
        borderBottomColor : '#0008',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
    },
    delbtn : {
        backgroundColor : "#0008" ,
        height : 30 ,
        width : 30,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    }
})