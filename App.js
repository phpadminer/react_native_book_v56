import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './app/Home/Home'
export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Home></Home>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },

});
