import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mainavigation from './Navigate/index';
import { useCachedResources } from './Hook';
import UserProvider from './Hook/UserProvider'
export default function App() {
  if (useCachedResources() == false) {
    return null;
  }
  return (
    <UserProvider>
      <Mainavigation></Mainavigation>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
