import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';


export function MyButton(props) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={props.onSubmit}>
        <Text>{props.mytitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#cfcfcf',
    margin:20,
    padding:20,
    borderRadius:10,
    alignItems:'center',

    
  }
  
  

});