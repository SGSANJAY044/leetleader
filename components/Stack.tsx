import { Stack } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
export default function StackNavigator() {
  const auth = useSelector((state: RootState) => state.auth.auth);
  return( <Stack screenOptions={{ headerShown: false }} >
    <Stack.Screen name="(auth)" options={{ headerShown: false }} redirect={auth} />
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="+not-found" />
  </Stack>)
}