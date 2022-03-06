import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  FlatList,
} from 'react-native';
import React from 'react';
import {H1, H2, H3} from './src/component/basic';
import PostList from './src/component/Home/PostList';
import {Colors} from './src/theme';
import post from './src/assets/data/post.json';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: !isDarkMode ? Colors.colors.bg : Colors.colors.b,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: !isDarkMode ? Colors.colors.bg : Colors.colors.b,
        }}>
        <FlatList
          data={post}
          renderItem={({item}) => <PostList FeedData={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
