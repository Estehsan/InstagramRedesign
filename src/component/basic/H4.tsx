import {StyleSheet, useColorScheme, Text} from 'react-native';
import React from 'react';
import {Col, theme} from '../../theme';

const H3 = ({children, font, color}) => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <>
      <Text
        style={{
          fontSize: 10,
          color: color ? color : isDarkMode ? Col.colors.b : Col.colors.w,
          fontFamily: font ? font : 'Poppins-Regular',
          fontWeight: '600',
          letterSpacing: 2,
          lineHeight: 24,
        }}>
        {children}
      </Text>
    </>
  );
};

export default H3;

const styles = StyleSheet.create({});
