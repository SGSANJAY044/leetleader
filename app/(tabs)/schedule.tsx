
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import TaskCard from '@/components/Pages/Schedule/TaskCard';
export default function schedule() {

  const [todayTasks, setTodayTasks] = useState<any[]>([]);
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const fetchTodayTasks = async () => {
      try {
        const response = await axios.get(`https://00c7-2409-40f4-26-51a1-9cf4-1f2f-73e3-254.ngrok-free.app/assignment/todaytasks/questions/${user?.StudentID}`);
        if (!response) {
          throw new Error('Network response was not ok');
        }
        setTodayTasks(response.data.questions);
      } catch (error) {
        console.error('Error fetching today\'s tasks:', error);
      }
    };

    if (user?.StudentID) {
      fetchTodayTasks();
    }
  }, [user?.StudentID]);

  console.log(todayTasks);

  return (
    <ScrollView>
   <View style={styles.body}>
    <View>
      <Text style={{fontSize:20,fontWeight:600,color:'#EBA340',marginBottom:20}}>TODAY LEET TASKS</Text>
      <View style={{gap:20}}>
              {todayTasks.map((task,index)=><TaskCard number={task.QuestionID} question={task.QuestionTitle} type={task.Difficulty} finished={true}/>)}
      </View>
    </View>
    <View style={{paddingBottom:20}}>
      <Text style={{fontSize:20,fontWeight:600,color:'#EBA340',marginBottom:20}}>FRIENDS QUESTIONS</Text>
      <View style={{gap:20}}>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((index)=><TaskCard number={82} question="ADD TWO NUMBERS" type="Hard" finished={true}/>)}
      </View>
    </View>
    </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  body:{
    marginTop:20,
    padding:20,
    gap:40,
    height: '100%',
    overflowY: 'scroll'
  }
})
