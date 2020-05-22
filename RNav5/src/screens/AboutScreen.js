import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function AboutScreen() {

    const navigate = useNavigation();
    
    const route = useRoute();
    const name  = route.params.name;

    const goBack = () => {
        navigate.goBack();
    }

    return (
        <SafeAreaView>
            <Text>AboutScreen</Text>
            <Text>WELCOME {name}</Text>
            <Button title="Back" onPress={goBack} />
        </SafeAreaView>
    );
}

export default AboutScreen;