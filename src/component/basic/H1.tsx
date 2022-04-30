import {useColorScheme, Text} from 'react-native';
import React from 'react';
import {Col} from '../../theme';

const H1 = ({children, font, color, size, lineHeight}) => {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <>
      <Text
        style={{
          fontSize: size ? size : 20,
          color: color ? color : isDarkMode ? Col.colors.b : Col.colors.w,
          fontFamily: font ? font : 'Poppins-Regular',

          fontWeight: '400',
          letterSpacing: 1,
          lineHeight: lineHeight ? lineHeight : 24,
        }}>
        {children}
      </Text>
    </>
  );
};

export default H1;
