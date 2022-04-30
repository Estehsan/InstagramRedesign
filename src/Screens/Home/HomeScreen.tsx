import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  FlatList,
} from 'react-native';
import React from 'react';
import PostList from '../../component/Home/PostList';
import post from '../../assets/data/post.json';
import {Col, Colors} from '../../theme';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: !isDarkMode ? Col.colors.bg : Col.colors.b,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: !isDarkMode ? Col.colors.bg : Col.colors.b,
        }}>
        <FlatList
          data={post}
          renderItem={({item}) => <PostList FeedData={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
