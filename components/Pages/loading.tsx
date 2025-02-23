import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { Image } from 'expo-image';

const Loading: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('@/assets/images/logo.gif')} style={{ width: 150, height: 150 }} />
  </View>
  );
};

export default Loading;