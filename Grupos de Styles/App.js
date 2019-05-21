import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class FirstProject extends Component{
  render(){
    return(
      <View style={{paddingTop:50,backgroundColor:'green'}}>
        <Text style={styles.BlueBig}>Texto 1</Text>
        <Text style={styles.Red}>Texto 2</Text>
        <Text style={[styles.BlueBig,styles.Red]}>Texto 3</Text>
        <Text style={[styles.Red,styles.BlueBig]}>Texto 4</Text>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    BlueBig:{
      color:'#0000FF',
      fontSize:30,
      textAlign:'center'
    },
    Red:{
      color:'red',
      fontSize:40
      
    }
  });