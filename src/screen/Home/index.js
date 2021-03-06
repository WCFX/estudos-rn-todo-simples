import React, { useState, useRef } from 'react';
import 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './style';

const Home = () => {

  const modalizeRef = useRef(null);
  const [ingredient, setIngredient] = useState('');
  const [isPress, setIsPress] = useState(false);
  const [list, setList] = useState([]);
  const [deleteIngredient, setDeleteIngredient] = useState('');

  const handleSubmit = () => {
    if(ingredient.trim()){
      setList([...list, ingredient]);
      setIngredient('');
    }
  };

  const handleDeleteItem = (item) => {
    setList(list.filter((ingredients) => ingredients !== item));
    modalizeRef.current?.close();
    console.log(item);
  };

  const cleanInput = () => {
    setIngredient('')
  };

  const openModal = async (item) => {
    await setDeleteIngredient(item);
    modalizeRef.current?.open();
  }; 

  const buttonProps = {
    activeOpacity: 1,
    underlayColor: '#022442',
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: (event) => handleSubmit(event)
  };

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Faça uma Receita</Text>
      
      <View style={styles.containerInput}>

        <TextInput
          autoCompleteType="off"
          autoCorrect={false}
          style={styles.input}
          placeholder="Digite um ingrediente"
          value={ingredient}
          onChangeText={setIngredient}
        />
        
        <BorderlessButton 
          onPress={cleanInput}
          style={styles.cleanButton}
        >
          <Feather name="x" size={24} color="#000" />
        </BorderlessButton>

      </View>

        <TouchableHighlight {...buttonProps}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableHighlight>

      <Modalize ref={modalizeRef} snapPoint={180} tapGestureEnabled={false}>
        <View style={styles.containerModalize}>
          <Text style={styles.msgModalize}>Você quer excluir a tarefa?</Text>

          <TouchableHighlight onPress={() => handleDeleteItem(deleteIngredient)} style={styles.btnDelete}>
            <Text style={styles.btnModalizeText}>EXCLUIR</Text>
          </TouchableHighlight>
        </View>
      </Modalize>

      <FlatList
        data={list}
        keyExtractor={item => String(item)}
        renderItem={({item, index}) => {
          return (
            <View style={styles.containerItem} key={index}>
            <TouchableHighlight style={styles.btnItem} onPress={() => openModal(item)}>
              <Text style={styles.item}>{item}</Text>
            </TouchableHighlight>
          </View>
          )
        }}
      />
    </SafeAreaView>
  )
};


export default Home;