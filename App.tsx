import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/component/navigation';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
