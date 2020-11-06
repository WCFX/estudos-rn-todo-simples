import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screen/Home';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8f8e8f'
          }
        }}
      >
        <Screen 
          name="Home"
          component={Home}
          options={{
            title: 'Desafio',
          }}  
        />
      </Navigator>
    </NavigationContainer>
  )
};
