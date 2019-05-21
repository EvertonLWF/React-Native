import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
class Janta extends Component{
  constructor(props){
    super(props);
    this.state = {comida:props.comida}
    var comidas = ['pizza','Lasanha','Burger','Sopa','Arroz'];
    setInterval(()=>{
      this.setState(previousState => {
        let n = Math.floor(Math.random()*comidas.length);
        return {comida: comidas[n]};
      });
    },1000);
  }
  render(){
    return(
      <View>
        <Text style={{textAlign:'center',fontSize:20,color:'red'}}>Hoje você vai jantar:</Text>
        <Text style={{textAlign:'center',fontSize:20,color:'green'}}>{this.state.comida}</Text>
      </View>
      );
    }
  }

  export default class App extends React.Component {
    render() {

      return (
      <View style={{paddingTop:50}}>
      
      <Janta comida='Biscoito'/>
      </View>
      );
    }
  }
