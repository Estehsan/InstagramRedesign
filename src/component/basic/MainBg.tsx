import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {Col, Colors, theme} from '../../theme';
import {iChildren} from '../../types/model';

interface iChild {
  children: iChildren;
}
const MainBg = ({children}: iChild) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Col.colors.b : Col.colors.w,
      }}>
      {children}
    </View>
  );
};

export default MainBg;

const styles = StyleSheet.create({});
