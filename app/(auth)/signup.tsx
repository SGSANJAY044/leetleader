import { useState } from 'react';
import { StyleSheet, Text,Image, View, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import axios from 'axios';

export default function Signup() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async() => {
    try {
      await axios.post('https://00c7-2409-40f4-26-51a1-9cf4-1f2f-73e3-254.ngrok-free.app/auth/student/signup',{mail,password});
    } catch (error) {
      console.error('Signup failed:', error);
      return false;
    }
    // On successful signup:
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
    <View style={styles.background}>
    <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
    <Text style={{fontSize:45,fontWeight:600,color:'#fff',marginBottom:100}}>LEETLEADER</Text>
    </View>
    <View style={{marginTop:450}}>
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={mail}
      onChangeText={setMail}
      keyboardType="email-address"
      autoCapitalize="none"
    />
    
    <TextInput
      style={styles.input}
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
    />
    
    <TouchableOpacity style={styles.button} onPress={handleSignup}>
      <Text style={styles.buttonText}>Signup</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => router.push('/(auth)')}>
      <Text style={styles.linkText}>Already have an account? Login</Text>
    </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    logo:{
      height:210,
      width: 210,
      marginBottom:40
  
    },
    background:{
      top: -250,
      left: -150,
      backgroundColor:'#EBA340',
      height:700,
      width:700,
      borderRadius:'100%',
      position: 'absolute',
      alignItems:'center',
      justifyContent:'flex-end'
    },
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#EBA340',
    },
    input: {
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#EBA340',
      padding: 15,
      borderRadius: 10,
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    linkText: {
      color: '#EBA340',
      textAlign: 'center',
      marginTop: 20,
    },
  });