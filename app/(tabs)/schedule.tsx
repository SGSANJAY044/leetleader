
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import TaskCard from '@/components/Pages/Schedule/TaskCard';
import Loading from '@/components/Pages/loading';
export default function schedule() {

  const [todayTasks, setTodayTasks] = useState(null);
  const [friendsTasks, setFriendsTasks] = useState(null);
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const fetchTodayTasks = async () => {
      try {
        const response = await axios.get(`https://709d-2409-40f4-a3-1ce4-8890-f227-c8ec-66e9.ngrok-free.app/assignment/todaytasks/questions/${user?.StudentID}`);
        if (!response) {
          throw new Error('Network response was not ok');
        }
        setTodayTasks(response.data.questions);
      } catch (error) {
        console.error('Error fetching today\'s tasks:', error);
      }
    };

    const fetchFriendsTasks = async () => {
      try {
        const response = await axios.get(`https://709d-2409-40f4-a3-1ce4-8890-f227-c8ec-66e9.ngrok-free.app/students/friends/${user?.StudentID}`);
        if (!response) {
          throw new Error('Network response was not ok');
        }
        setFriendsTasks(response.data.questions);
      } catch (error) {
        console.error('Error fetching friends\' tasks:', error);
      }
    };

    if (user?.StudentID) {
      fetchTodayTasks();
      fetchFriendsTasks();
    }
  }, [user?.StudentID]);


  return (
    todayTasks && friendsTasks ? (
    <ScrollView>
   <View style={styles.body}>
    <View>
      <Text style={{fontSize:20,fontWeight:600,color:'#EBA340',marginBottom:20}}>TODAY LEET TASKS</Text>
      <View style={{gap:20}}>
              {todayTasks.map((task,index)=><TaskCard key={index} number={task.QuestionID} question={task.QuestionTitle} type={task.Difficulty} finished={true}/>)}
      </View>
    </View>
    <View style={{paddingBottom:20}}>
      <Text style={{fontSize:20,fontWeight:600,color:'#EBA340',marginBottom:20}}>FRIENDS QUESTIONS</Text>
      <View style={{gap:20}}>
              {friendsTasks.map((task,index)=><TaskCard key={index} number={task.QuestionID} question={task.QuestionTitle} type={task.Difficulty} finished={true}/>)}
      </View>
    </View>
    </View>
    </ScrollView>
    ) : (
      <Loading/>
    )
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
