import {StyleSheet, useColorScheme, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../theme';

const P = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      style={{
        color: isDarkMode ? Colors.colors.w : Colors.colors.b,
        fontFamily: 'Poppins-Regular',
        fontWeight: '200',
        fontSize: '15',
      }}>
      {children}
    </Text>
  );
};

export default P;

const styles = StyleSheet.create({});
