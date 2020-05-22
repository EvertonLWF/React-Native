import React, { useState, useLayoutEffect} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import Logo from'../components/logo';


function HomeScreen() {

    const [name, setNome] = useState('');
    const [count, setCount] = useState(0);

    const navigation = useNavigation();

    const handleSendButton = () =>{
        setCount(count+1);
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: count
        });
    },[count])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=> <Logo />
        })
    },[])

    const HandlePlus = ()=>{
        setCount((c) => c + 1);
    }

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <TextInput 
                style={styles.input}
                placeholder="Digite seu nome"
                value={name}
                onChangeText={t=>setNome(t)}
            />
            <Button title=" Enviar" onPress={handleSendButton}/>
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:250,
        padding:10,
        margin:15,
        fontSize:16,
        backgroundColor:'#DDD'
    }
});
export default HomeScreen;