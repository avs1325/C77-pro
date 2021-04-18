import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,} from 'react-native';
import db from '../config';
import firebase from 'firebase';

//abcd@gmail.com -- 12345678
//abcdef@gmail.com -- 12345678

export default class SignupLoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            emailId : "",
            password : "",
        }
    }

    userLogin = async (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(() => {
            Alert.alert("Signed In")
        })
        .catch(function(error){
            //handling errors
            var errorCode = error.code
            var errorMessage = error.message
            return (
                Alert.alert(errorMessage)
            )
        })

    }

    userSignUp = (emailId, password) => {
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then(() => {
            return(
                Alert.alert("User added succesfully")
                )
            })
            .catch((error) => {
                var errorCode = error.code
                var errorMessage = error.message
                return (
                    Alert.alert(errorMessage)
                )
            })
        
    }


    render() {
        return(
            <View style = {styles.container}>
                <View style = {{justifyContent: "center", alignItems: "center"}}>
                    <Text style = {styles.title}>
                        Barter App
                    </Text>
                </View>

                <View style = {styles.profileContainer}>
                    <TextInput 
                        style = {styles.loginBox}
                        placeholder = {"abc@example.com"}
                        keyboardType = {"email-address"}
                        onChangeText = {(text) => {
                            this.setState({
                                emailId : text,
                            })
                        }}
                    />
                    <TextInput 
                        style = {styles.loginBox}
                        placeholder = {"Enter Password"}
                        secureTextEntry = {true}
                        onChangeText = {(text) => {
                            this.setState({
                                password : text,
                            })
                        }}
                    />
                    <TouchableOpacity
                        style = {[styles.button, {marginBottom: 20, marginTop: 20}]}
                        onPress = {() => {
                            this.userLogin(this.state.emailId, this.state.password)
                        }}
                    >
                        <Text style = {styles.buttonText}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {() => {
                            this.userSignUp(this.state.emailId, this.state.password)    
                        }}
                    >
                        <Text style = {styles.buttonText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title :{
        fontSize:65,
        fontWeight:'300',
        padding:30,
        color : 'black'
    },
    loginBox:{
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : 'black',
        fontSize: 20,
        margin:10,
        paddingLeft:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"black",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
    }
})
