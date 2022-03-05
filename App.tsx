import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {H1, H2, H3} from './src/component/basic';
import PostList from './src/component/Home/PostList';

const App = () => {
  return (
    <SafeAreaView>
      <PostList />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
