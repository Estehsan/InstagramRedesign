import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavi from './BottomTabNavi';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="BottomTabNavi"
        component={BottomTabNavi}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
