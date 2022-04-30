import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabNavi from './HomeTabNavi';

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
    </Bottom.Navigator>
  );
}

function Second() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
export default BottomTabNavi;
