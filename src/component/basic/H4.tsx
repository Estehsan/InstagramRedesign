import {StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {Text} from 'react-native-elements';
import {Colors} from '../../theme';

const H4 = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      h4
      h4Style={{
        color: isDarkMode ? Colors.colors.w : Colors.colors.b,
        fontFamily: 'Poppins-Regular',
        fontWeight: '200',
      }}>
      {children}
    </Text>
  );
};

export default H4;

const styles = StyleSheet.create({});
