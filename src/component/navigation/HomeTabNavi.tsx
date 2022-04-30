import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Comment, HomeScreen} from '../../Screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const HomeTabNavi = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Comment"
          component={Comment}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeTabNavi;

const styles = StyleSheet.create({});
