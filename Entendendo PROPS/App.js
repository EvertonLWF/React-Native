import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class Imagem extends Component{
  
  render(){

    let img = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/'+this.props.nome+'_Einstein_Head.jpg/450px-Albert_Einstein_Head.jpg',
    };
    return(
      <Image source={img} style={{width:parseInt(this.props.alt), height:parseInt(this.props.larg)}}/>
      );
  }
}

export default class App extends React.Component {
  render() {
    let nome = 'Feijo';
    let img = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/450px-Albert_Einstein_Head.jpg',
    };
    return (
      <View style={styles.container}>
      <Text style={styles.text}>My name is {nome}!</Text>
      <Button title="ligar" onPress = {()=>alert("teste")}/>
      <Imagem nome='Albert' larg='250' alt='250'/>
      </View> 
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize:25,
      color: 'red'
    }
  });
