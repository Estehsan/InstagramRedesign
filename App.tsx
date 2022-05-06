import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/component/navigation';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
import SwitchContextProvider from './src/context/SwitchContext';
Amplify.configure(awsconfig);

const App = () => {
  return (
    <NavigationContainer>
      <SwitchContextProvider>
        <Navigation />
      </SwitchContextProvider>
    </NavigationContainer>
  );
};

const signUpConfig = {
  header: 'Sign Up to our app',
  hideAllDefaults: true,

  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string',
      placeholder: 'Enter your email',
    },
    {
      label: 'Username',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string',
      placeholder: 'Enter your username',
    },
  ],
};

// export default withAuthenticator(App, {
//   signUpConfig,
// });

export default App;

const styles = StyleSheet.create({});
