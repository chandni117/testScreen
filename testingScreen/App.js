import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, View } from 'react-native';
import BottomNav from './Components/BottomNav'
import Search from './Components/Search';
import Card from './Components/Card';
import MidScreen from './Components/MidScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Search />
      <Card />
      <MidScreen />
      <BottomNav />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,248)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
