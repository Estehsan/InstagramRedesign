import {StyleSheet, useColorScheme, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../theme';

const LParagraph = ({children, ...props}) => {
  return (
    <Text
      style={{
        color: 'grey',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        ...props,
      }}>
      {children}
    </Text>
  );
};

export default LParagraph;

const styles = StyleSheet.create({});
