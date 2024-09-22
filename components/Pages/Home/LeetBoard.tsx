import {View,Text,Image,StyleSheet} from 'react-native'
import { Shadow } from 'react-native-shadow-2';
export default function LeetBoard({rank,name,roll,total}) {
  return (
    <View style={styles.card}>
        <View style={{flexDirection:'row',gap:20,alignItems:'center'}}>
        <View style={{backgroundColor:'#EBA340',padding:10,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:5,width:65}}>
            <Text style={{fontSize:20,fontWeight:500,color:'white'}}>{rank}</Text>
            {rank<=3 && <Image style={styles.cardImage} source={require('@/assets/images/logo.png')} />}
        </View>
        <Text style={{fontSize:20,fontWeight:400,color:'gray'}}>{name} {roll}</Text>
        </View>
        <Text style={{fontSize:20,fontWeight:600,color:'#EBA340'}}>{total}</Text>
    </View>
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
