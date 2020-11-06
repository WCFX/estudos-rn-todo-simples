import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './style';


const Home = () => {

  const [ingredient, setIngredient] = useState('');

  const [list, setList ] = useState([]);

  const handleSubmit = () => {
    if(ingredient.trim()){
      setList([...list, ingredient]);
      setIngredient('');
    }
  };

  const handleRenderIngredient = ({ item }) => {
    return(
      <View style={styles.containerItem}>
        <Text style={styles.item}>{item}</Text>
      </View>
    )
  } 
    
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Faça um Bolo</Text>
      <TextInput
        autoCompleteType="off"
        autoCorrect={false}
        style={styles.input}
        placeholder="Digite um ingrediente"
        value={ingredient}
        onChangeText={setIngredient}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}  
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      <FlatList
        data={list}
        keyExtractor={item => item}
        renderItem={handleRenderIngredient}
      />
    </SafeAreaView>
  )
};


export default Home;