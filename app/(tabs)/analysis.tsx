import axios from 'axios';
import { useEffect, useState } from 'react';
import {ScrollView, StyleSheet, Text,Platform, View } from 'react-native';

interface Submissions {
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lamg: string;
}

export default function analysis() {
  const [submissions,setSubmissions]=useState(useState<Submissions[] | null>(null))
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('https://6e38-183-82-247-142.ngrok-free.app/students/submissions/fjzzq2002'); 
        if (!response) {
          throw new Error('Network response was not ok');
        }
        setSubmissions(response.data.submission);
      } catch (error) {
        console.error('Error fetching Student submissions:', error);
      }
    };
    fetchSubmissions();
  }, []);
  
  return (
    <View style={styles.body}>
      <View style={{height:"45%"}}></View>
      <View style={styles.submission}>
        <Text style={{fontSize:15,fontWeight:600,color:'#EBA340',marginBottom:20}}>Recent Submissions</Text>
        <ScrollView style={{overflowY: 'scroll',}} showsVerticalScrollIndicator={false}  >
        <View style={{gap:10}}>
          {submissions.map((submission,index)=>
          <View key={index}>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginBottom:10}}>
            <Text style={{fontSize:18,fontWeight:400,color:'gray',width: 200}}  numberOfLines={1} ellipsizeMode="tail">{submission?.title}</Text>
            <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
              <View style={{height:5,width:5,backgroundColor:`${submission?.statusDisplay!='Accepted'?'#FF0000':'#52E14B'}`,borderRadius:20,marginTop:2}}/>
              <Text style={{color:`${submission?.statusDisplay!='Accepted'?'#FF0000':'#52E14B'}`}}>{submission?.statusDisplay}</Text>
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
        </ScrollView>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  body:{
    marginTop:20,
    padding:20,
  },
  submission:{
    backgroundColor:'white',
    padding:15,
    height: 380,
    borderRadius:10
  }
})
