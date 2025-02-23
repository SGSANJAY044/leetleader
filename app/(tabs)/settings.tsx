import { useState } from 'react';
import { Image, TextInput, StyleSheet, Text, Platform, View, TouchableOpacity } from 'react-native';
import { MaterialIcons,Feather,FontAwesome6, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Loading from '@/components/Pages/loading';
import { useFonts } from 'expo-font';
export default function settings() {
  const user = useSelector((state: RootState) => state.user.user);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.Name);
  const [rollNo, setRollNo] = useState(user?.Roll);
  const [department, setDepartment] = useState(user?.DepartmentID);
  const [className, setClassName] = useState(user?.ClassID);
  const [phone, setPhone] = useState(user?.Phone);
  const [mail, setMail] = useState(user?.Mail);
  const [fontsLoaded] = useFonts({
    MaterialIcons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf'),
    Feather: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Feather.ttf'),
    Ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
    FontAwesome6_Regular: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome6_Regular.ttf'),
    FontAwesome6_Solid: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome6_Solid.ttf'),
    FontAwesome6_Brands: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome6_Brands.ttf'),
  });

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
        const response = await axios.put(`https://709d-2409-40f4-a3-1ce4-8890-f227-c8ec-66e9.ngrok-free.app/students/${mail}`, {
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
    user && fontsLoaded ?
    <View style={styles.body}>
      <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
      {isEditing ? <Feather name="check" size={24} color="white" /> : <Feather name="edit-2" size={24} color="white" />}
      </TouchableOpacity>
      <View style={styles.profile}>
        <Image style={styles.logo} source={require('@/assets/images/Profile.webp')} />
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
    : <Loading/>
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
    width: 150,
    height: 150,
    borderRadius: 50
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