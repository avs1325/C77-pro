import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

export default function App (){    
  return(
    <AppContainer/>
  )
}

const switchNavigator = createSwitchNavigator({
  SignupLoginScreen: {screen: SignupLoginScreen},
})

const AppContainer = createAppContainer (switchNavigator)
