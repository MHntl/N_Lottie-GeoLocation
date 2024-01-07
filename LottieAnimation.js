import React from 'react';
import LottieView from 'lottie-react-native';

const LottieAnimation = () => {
  return (
    <LottieView
      source={require('./Animation - 1704622250130.json')}
      autoPlay
      loop={true}
      style={{flex: 1}}
    />
  );
};

export default LottieAnimation;
