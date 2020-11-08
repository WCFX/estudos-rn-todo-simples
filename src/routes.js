import 'react-native-gesture-handler';
import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
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
            headerRight: () => (
              <TouchableHighlight>
                <Feather
                onPress={() => {}}
                style={{ marginRight: 10 }}
                name="refresh-cw"
                size={34}
                color="#156eee"/>
              </TouchableHighlight>
            )
          }}  
        />
      </Navigator>
    </NavigationContainer>
  )
};
