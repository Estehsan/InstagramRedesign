import {StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {Text} from 'react-native-elements';
import {Col} from '../../theme';

const H4 = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      h4
      h4Style={{
        color: isDarkMode ? Col.colors.w : Col.colors.b,
        fontFamily: 'Poppins-Regular',
        fontWeight: '200',
      }}>
      {children}
    </Text>
  );
};

export default H4;

const styles = StyleSheet.create({});
