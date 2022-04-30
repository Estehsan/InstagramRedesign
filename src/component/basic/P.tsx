import {StyleSheet, useColorScheme, Text} from 'react-native';
import React from 'react';
import {Col} from '../../theme';

const P = ({children, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      style={{
        color: isDarkMode ? Col.colors.w : Col.colors.b,
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        ...props,
      }}>
      {children}
    </Text>
  );
};

export default P;

const styles = StyleSheet.create({});
