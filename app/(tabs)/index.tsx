import { Image, StyleSheet, Text,Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <View style={styles.card}></View>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    marginTop:40,
    padding:20
  },
  card:{
    display:'flex',
  }
});
