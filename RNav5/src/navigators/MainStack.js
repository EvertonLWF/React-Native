import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator screenOptions={{
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: "#66FF66",
      height: 100
    },
    headerTitleStyle: {
      fontSize: 26,
      color: '#000'
    }
  }}>
    <MainStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Início',
    }} />
    <MainStack.Screen name="About" component={AboutScreen} options={({ route }) => ({
      headerStyle: {
        height: 120,
        backgroundColor: route.params?.cor ?? '#FF0000'
      }
    })} />
  </MainStack.Navigator>
);