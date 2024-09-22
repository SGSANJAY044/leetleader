import { Image, StyleSheet, Text,Platform, View } from 'react-native';
import Card from '@/components/Pages/Home/Card';
import LeetBoard from '@/components/Pages/Home/LeetBoard';
import { Shadow } from 'react-native-shadow-2';

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <Card name='SANJAY' roll='21ADR044'/>
      <View
      style={{
      borderBottomColor: 'grays',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}          
      />
      <View>

      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:30}}>
        <Text style={{fontSize:25,fontWeight:600,color:'#EBA340'}}>LEADER BOARD</Text>
        <Shadow offset={[0, 8]}  distance={24} startColor="rgba(149, 157, 165, 0.05)" stretch>
        <View style={styles.sort}>
          <Text style={{fontSize:20,justifyContent:'center',color:'gray'}}>sort</Text>
          <View style={styles.sortButton}><Image source={require('@/assets/images/sort.png')} style={{height:20,width:20}}/></View>
        </View>
        </Shadow>
      </View>
      <View style={styles.leadBoard}>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((index)=><LeetBoard rank={index} name='SANJAY' roll='21ADR044' total={(6-index)*233} />)}
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    marginTop:40,
    padding:20,
    gap:40
  },
  sort:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    backgroundColor:'white',
    paddingLeft:10,
    borderRadius:5,
    justifyContent:'center'
  },
  sortButton:{
    backgroundColor:'#EBA340',
    borderRadius:5,
    padding:5
  },
  leadBoard:{
    gap:20
  },
  card:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#EBA340'
  },
  cardImage:{
    height:100,
    width: 100
  }
});
