import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export function Input (props) {
  

  return (
    <View>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
 }


const styles = StyleSheet.create({
  input:{

   
    margin:10,
    padding:10,
    borderRadius:50,
    borderColor:'black',
  }
  
})

