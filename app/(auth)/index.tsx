import { useState } from 'react';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { setAuth } from '@/redux/slices/authSlice';
export default function Login() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async() => {
    try {
      const responce =await axios.post('https://709d-2409-40f4-a3-1ce4-8890-f227-c8ec-66e9.ngrok-free.app/auth/student/login',{mail,password});
      
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error
      });
      console.error('Signup65 failed:', error);
      return false;
    }
    // On successful login:
    dispatch(setAuth(true));
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
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
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