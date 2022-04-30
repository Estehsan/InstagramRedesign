import {StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {Text} from 'react-native-elements';
import {Col, Colors} from '../../theme';

const H3 = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      h3
      h3Style={{
        color: isDarkMode ? Col.colors.w : Col.colors.b,
        fontFamily: 'Poppins-Regular',
        fontWeight: '200',
      }}>
      {children}
    </Text>
  );
};

export default H3;

const styles = StyleSheet.create({});
