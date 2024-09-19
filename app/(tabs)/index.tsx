import { Image, StyleSheet, Text,Platform, View } from 'react-native';
import Card from '@/components/Pages/Home/Card';
import LeetBoard from '@/components/Pages/Home/LeetBoard';
export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <Card/>
      <View
      style={{
      borderBottomColor: 'grays',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}          
      />
      <View style={styles.leadBoard}>
      {Array.from({ length: 5 }, (_, i) => i + 1).map(()=><LeetBoard/>)}
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
