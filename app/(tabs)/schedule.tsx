
import { Image, StyleSheet, Text,Platform, View } from 'react-native';
import TaskCard from '@/components/Pages/Schedule/TaskCard';
export default function schedule() {
  return (
   <View style={styles.body}>
    <View>
      <Text style={{fontSize:20,fontWeight:600,color:'#EBA340',marginBottom:20}}>TODAY LEET TASKS</Text>
      <View style={{gap:20}}>
              {Array.from({ length: 3 }, (_, i) => i + 1).map((index)=><TaskCard number={82} question="ADD TWO NUMBERS" type="Hard" finished={true}/>)}
      </View>
    </View>
    <View>
      <Text style={{fontSize:20,fontWeight:600,color:'#EBA340',marginBottom:20}}>FRIENDS QUESTIONS</Text>
      <View style={{gap:20}}>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((index)=><TaskCard number={82} question="ADD TWO NUMBERS" type="Hard" finished={true}/>)}
      </View>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
  body:{
    marginTop:40,
    padding:20,
    gap:40
  }
})
