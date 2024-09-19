import {Image,StyleSheet,Text,View} from 'react-native'

export default function Card() {
  return (
    <View style={styles.card}>
        <View style={styles.cardView}>
            <Text style={{fontSize:20,fontWeight:600,color:'white'}}>SANJAY 21ADR044</Text>
            <View style={{gap:4,width:'80%'}}>
                <View style={{flexDirection:'row',alignItems:'center', gap:30}}>
                    <Text style={{color:'white'}}>Easy</Text>
                    <View style={{height:5,borderRadius:30,width:"70%",backgroundColor:'white'}}/>
                </View>
                 <View style={{flexDirection:'row',alignItems:'center', gap:10}}>
                    <Text style={{color:'white'}}>Medium</Text>
                    <View style={{height:5,borderRadius:30,width:"90%",backgroundColor:'white'}}/>
                </View>
                 <View style={{flexDirection:'row',alignItems:'center', gap:30}}>
                    <Text style={{color:'white'}}>Hard</Text>
                    <View style={{height:5,borderRadius:30,width:"40%",backgroundColor:'white'}}/>
                </View>
            </View>
        </View>
        <Image style={styles.cardImage} source={require('@/assets/images/logo.png')} />
    </View>
  )
}
const styles = StyleSheet.create({
  card:{
    flexDirection:'row',
    backgroundColor:'#EBA340',
    borderRadius:15,
    padding:10,
  },
  cardView:{
    flexDirection:'column',
    width:'70%',
    padding:10,
    gap:2
  },
  cardImage:{
    height:110,
    width: 110
  }
});