import { useState } from 'react';
import { Image, TextInput, StyleSheet, Text, Platform, View, TouchableOpacity } from 'react-native';
import { MaterialIcons,Feather,FontAwesome6, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
export default function settings() {
  const user = useSelector((state: RootState) => state.user.user);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.Name);
  const [rollNo, setRollNo] = useState(user?.Roll);
  const [department, setDepartment] = useState(user?.DepartmentID);
  const [className, setClassName] = useState(user?.ClassID);
  const [phone, setPhone] = useState(user?.Phone);
  const [mail, setMail] = useState(user?.Mail);

  const allowedValues = ['CSE', 'IT', 'ECE', 'EEE']; // Add your department codes
  const departmentMap: { [key: string]: number } = {
    'CSE': 1,
    'IT': 2,
    'ECE': 3,
    'EEE': 4
  };

  const classMap: { [key: string]: number } = {
    'A': 101,
    'B': 102,
    'C': 103,
    // Add other classes as needed
  };

  const handleEdit = async () => {
    if (isEditing) {
      try {
        const response = await axios.put(`https://59bc-183-82-247-142.ngrok-free.app/students/${mail}`, {
          name,
          roll: rollNo,
          department_id: 2,
          class_id: 101,
          phone
        });

        if (response.status === 200) {
          setIsEditing(false);
        }
      } catch (error) {
        console.error('Error updating student data:', error);
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleDepartmentChange = (value: string) => {
    const inputValue = value.toUpperCase();
    if (allowedValues.includes(inputValue) || inputValue === "") {
      setDepartment(departmentMap[inputValue] || null);
    }
  };

  const handleClassChange = (value: string) => {
    const inputValue = value.toUpperCase();
    setClassName(classMap[inputValue] || null);
  };
  
  return (
    <View style={styles.body}>
      <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
      {isEditing ? <Feather name="check" size={24} color="white" /> : <Feather name="edit-2" size={24} color="white" />}
      </TouchableOpacity>
      <View style={styles.profile}>
        <Image style={styles.logo} source={require('@/assets/images/Profile.png')} />
      </View>
      <View style={styles.details}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={24} color="#EBA340" />
          <TextInput
            editable={isEditing}
            selectTextOnFocus={isEditing} 
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome6 name="id-card" size={24} color="#EBA340" />
          <TextInput
            editable={isEditing}
            selectTextOnFocus={isEditing} 
            style={styles.input}
            placeholder="Roll No"
            value={rollNo}
            onChangeText={setRollNo}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome6 name="building-circle-check" size={24} color="#EBA340" />
          <TextInput
            editable={isEditing}
            selectTextOnFocus={isEditing} 
            style={styles.input}
            placeholder="Department"
            value={Object.keys(departmentMap).find(key => departmentMap[key] === department) || ''}
            onChangeText={handleDepartmentChange}
            autoCapitalize="characters"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="school" size={24} color="#EBA340" />
          <TextInput
            editable={isEditing}
            selectTextOnFocus={isEditing} 
            style={styles.input}
            placeholder="Class"
            value={Object.keys(classMap).find(key => classMap[key] === className) || ''}
            onChangeText={handleClassChange}
            autoCapitalize="characters"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="phone" size={24} color="#EBA340" />
          <TextInput
            editable={isEditing}
            selectTextOnFocus={isEditing} 
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={24} color="#EBA340" />
          <TextInput
            editable={false}
            selectTextOnFocus={false} 
            style={styles.input}
            placeholder="Email"
            value={mail}
            onChangeText={setMail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    padding: 20,
    gap: 40,
    height: '100%'
  },
  logo: {
    width: 100,
    height: 100
  },
  profile: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  details: {
    width: '100%',
    height: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#EBA340'
  }
})