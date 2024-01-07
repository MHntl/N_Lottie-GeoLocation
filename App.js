import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieAnimation from './LottieAnimation';
import Geolocation from '@react-native-community/geolocation';
function App() {
  Geolocation.getCurrentPosition(info => console.log(info));
  return (
    <View style={styles.container}>
      <LottieAnimation />
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
