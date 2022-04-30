import {StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {Text} from 'react-native-elements';
import {Col} from '../../theme';

const H1 = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text
      h1
      h1Style={{
        color: isDarkMode ? Col.colors.w : Col.colors.b,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
      }}>
      {children}
    </Text>
  );
};

export default H1;

const styles = StyleSheet.create({});
