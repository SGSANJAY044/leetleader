import { Tabs } from 'expo-router';
import { Image } from 'expo-image';
import {StyleSheet} from 'react-native'
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MyTabBar from '@/components/TabBar';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{headerShown: false}} tabBar={props => <MyTabBar {...props} />}>
      <Tabs.Screen
       name="index"
        options={{
          tabBarIcon: "home"
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          tabBarIcon: "schedule"
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          tabBarIcon: "analysis"
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: "settings"
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    backgroundColor: '#0553',
  },
});