import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabNavi from './HomeTabNavi';
import {H1} from '../basic';
import Profile from '../../Screens/Profile/Profile';

const Bottom = createBottomTabNavigator();

function BottomTabNavi() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        options={{
          headerShown: false,
        }}
        name="HomeTabNavi"
        component={HomeTabNavi}
      />

      <Bottom.Screen name="Second" component={Second} />
      <Bottom.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
    </Bottom.Navigator>
  );
}

function Second() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <H1>Home Screen</H1>
    </View>
  );
}
export default BottomTabNavi;
