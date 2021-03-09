import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,

} from 'react-native';
import {MyButton,Input} from './component';

function Main() {
  return (

  
    <ImageBackground style={styles.stretch} source={require('./icon/arka.jpg')} >
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./icon/logo.jpg')} />
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>

      <Input style={styles.still} placeholder="E postanızı girin.." />

      
      <Input style={styles.still} placeholder="Şifrenizi girin.." />
      

      <MyButton mytitle="Kayıt Ol" onSubmit={() => alert('Başarılı')} />
      
    </ScrollView>
    </KeyboardAvoidingView>
    </View>
 

    </ImageBackground>
  )
}
const styles = StyleSheet.create({


  stretch: {
    
    flex: 1,
   
   
    
  },

  still:{
    
    color:'black',
    borderRadius:50,
    borderColor:'black',
    
   

  },

  logo :{
    
    borderRadius:300,
    width:150,
    height:150,
    alignContent:'center',
    margin:50,
    padding:150,


  }

})

export default Main;
