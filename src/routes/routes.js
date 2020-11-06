import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screen/Home';

import styles from './styles';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){

  const handleCleanList = () => {

  }

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
              <TouchableHighlight style={styles.headerButton}>
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
