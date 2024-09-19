import {View,Text,Image,StyleSheet} from 'react-native'
import { Shadow } from 'react-native-shadow-2';
export default function LeetBoard() {
  return (
    <Shadow  offset={[0, 8]}  distance={24} startColor="rgba(149, 157, 165, 0.05)" stretch>
    <View style={styles.card}>
        <View style={{flexDirection:'row',gap:20,alignItems:'center'}}>
        <View style={{backgroundColor:'#EBA340',padding:10,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:5}}>
            <Text style={{fontSize:20,fontWeight:400,color:'white'}}>1</Text>
        <Image style={styles.cardImage} source={require('@/assets/images/logo.png')} />
        </View>
        <Text style={{fontSize:20,fontWeight:400,color:'gray'}}>SANJAY 21ADR044</Text>
        </View>
        <Text style={{fontSize:20,fontWeight:600,color:'#EBA340'}}>222</Text>
    </View>
    </Shadow>
  )
}

const styles=StyleSheet.create({
    card:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:10,
        paddingRight:20,
        backgroundColor:'white'
    },
    cardImage:{
    height:30,
    width: 30
  }
    
})
