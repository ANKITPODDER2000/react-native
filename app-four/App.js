import React, { Component } from 'react'
import { StatusBar, Text, View , FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Form from './components/Form';
import Header from "./components/Header";
import Todo from './components/Todo';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo : [
                {title : "Do DSA" , key : 1},
                {title : "Do OOPs" , key : 2},
            ],
            key : 2
        };
        this.addNewTodo = this.addNewTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addNewTodo(val){
        let obj = {
            title : val,
            key   : this.state.key + 1
        };
        this.setState((prevState) => ({
            todo : [...prevState.todo , obj],
            key  : prevState.key + 1
        }))
    }

    deleteTodo(key){
        this.setState((prevState) => ({
            todo : prevState.todo.filter(x => x.key != key)
        }))
    }
    
    render() {
        return (
            <View onPress={() => Keyboard.dismiss()}>
                <Header/>
                {/* Create Todo */}
                <Form addNewTodo = {this.addNewTodo} />
                {/* All todos */}
                <FlatList 
                    key = {(item) => item.key}
                    data = {this.state.todo}
                    renderItem = {({item}) => (
                        <Todo obj={item} deleteTodo = {this.deleteTodo}/>
                    )}
                />
                {/* For StatusBar */}
                <StatusBar backgroundColor="red" />
            </View>
        )
    }
}
