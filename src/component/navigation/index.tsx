import {Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavi from './BottomTabNavi';
import {useSwitchContext} from '../../context/SwitchContext';
import HomeTabNavi from './HomeTabNavi';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {buyer} = useSwitchContext();
  return (
    <Stack.Navigator>
      {buyer ? (
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomTabNavi"
          component={BottomTabNavi}
        />
      ) : (
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeTabNavi"
          component={HomeTabNavi}
        />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
