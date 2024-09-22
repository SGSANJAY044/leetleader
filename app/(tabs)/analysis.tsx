import { Image, StyleSheet, Text,Platform, View } from 'react-native';


export default function analysis() {
  return (
    <View style={styles.body}>
      <View style={{height:"45%"}}></View>
      <View style={styles.submission}>
        <Text style={{fontSize:15,fontWeight:600,color:'#EBA340',marginBottom:20}}>Recent Submissions</Text>
        <View style={{gap:10}}>
          {Array.from({ length: 8 }, (_, i) => i + 1).map((index)=>
          <View>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginBottom:10}}>
            <Text style={{fontSize:20,fontWeight:400,color:'gray'}}>Submission  Question</Text>
            <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
              <View style={{height:5,width:5,backgroundColor:'#52E14B',borderRadius:20,marginTop:2}}/>
              <Text style={{color:'#52E14B'}}>complete run</Text>
            </View>
          </View>
          {index!==8 && <View
            style={{
            borderBottomColor: '#979797',
            opacity:10,
            borderBottomWidth: StyleSheet.hairlineWidth,
            }}          
            />}
          </View>
          )}
        </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  body:{
    marginTop:40,
    padding:20,
  },
  submission:{
    backgroundColor:'white',
    padding:15,
    borderRadius:10
  }
})
