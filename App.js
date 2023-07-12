import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mainavigation from './Navigate/index';
export default function App() {
  return (
      <Mainavigation></Mainavigation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
