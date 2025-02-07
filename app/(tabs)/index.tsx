import { Image, StyleSheet,ScrollView, Text,Platform, View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@/components/Pages/Home/Card';
import LeetBoard from '@/components/Pages/Home/LeetBoard';
import { Shadow } from 'react-native-shadow-2';
import { router } from 'expo-router';

interface StudentData {
  StudentID: number;
  Streak: number;
  SolvedEasy: number;
  SolvedMedium: number;
  SolvedHard: number;
  Ranking: number;
  Name: string;
  ClassID: number;
  Roll: string;
  DepartmentID: number;
  Phone: string;
  Mail: string;
  Username: string;
}

export default function HomeScreen() {
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [classStudentsData, setClassStudentsData] = useState<StudentData[] | null>(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get('https://f776-121-242-155-238.ngrok-free.app/students/21ADR044');
        if (!response) {
          throw new Error('Network response was not ok');
        }
        setStudentData(response.data.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    const fetchClassStudentsData = async () => {
      try {
        const response = await axios.get('https://f776-121-242-155-238.ngrok-free.app/students/class/101');
        console.log(response.data.students);
        
        if (!response) {
          throw new Error('Network response was not ok');
        }
        setClassStudentsData(response.data.students);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };
    fetchClassStudentsData();
    fetchStudentData();
  }, []);
  return (
    <View style={styles.body}>
      <Card name={studentData?.Name} roll={studentData?.Roll} easy={studentData?.SolvedEasy} medium={studentData?.SolvedMedium} hard={studentData?.SolvedHard}/>
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
      <ScrollView style={{height: '60%',overflowY: 'scroll',}} showsVerticalScrollIndicator={false}  >
      <View style={styles.leetBoard}>
      {classStudentsData?.map((data,index)=><LeetBoard rank={index+1} name={data.Name} roll={data.Roll} total={(6-index)*233} key={index}/>)}
      </View>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    marginTop:20,
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
  leetBoard:{
    gap:20,
    display: 'flex',
    height:'100%',
    overflowY:'scroll',
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
