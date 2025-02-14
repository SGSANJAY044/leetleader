import { Image, StyleSheet, Text,Platform, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

export default function TaskCard({number,question,type,finished}) {
  return (
    <View style={styles.body}>
        <View style={styles.block}>
            <View style={{padding:5,backgroundColor:'#EBA340', borderRadius:5}}>
                <Text style={{fontSize:15,color:'white',fontWeight:500, paddingStart:5, paddingEnd:5}}>{number}</Text>
            </View>
            <Text  style={{fontSize:15,fontWeight:400,textTransform:'uppercase',width: 150}} numberOfLines={1} ellipsizeMode="tail" >{question}</Text>
        </View>
        <View style={styles.block}>
            <View style={{...styles.badge, backgroundColor:`${type=='Easy'?'#E1F5E3':type=='Medium'?'#F5F5E3':'#FAE2E2'}`}}>
                <View style={{height:5,width:5,backgroundColor:`${type=='Easy'?'#52E14B':type=='Medium'?'#E1BE4B':'#E14B4B'}`,borderRadius:20}}></View>
                <Text style={{color:`${type=='Easy'?'#52E14B':type=='Medium'?'#E1BE4B':'#E14B4B'}`}}>{type}</Text>
            </View>
            <Image style={{height:20,width:20}} source={require('@/assets/images/NotDoneTick.png')}/>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    body:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    badge:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
        padding:5,
        paddingStart:10,
        paddingEnd:10,
        borderRadius:20
    },
    block:{
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }
})
