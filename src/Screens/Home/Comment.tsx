import {FlatList, StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {GlobalCSS, MainBg, P} from '../../component/basic';
import commentData from '../../assets/data/commentData.json';
import CommentList from '../../component/Home/Comment/CommentList';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Col} from '../../theme';

const Comment = ({route}) => {
  const {data} = route.params;

  console.log(data);
  return (
    <MainBg>
      <FlatList
        data={data}
        renderItem={({item}) => <CommentList item={item} />}
      />
      <Input />
    </MainBg>
  );
};

export default Comment;

const styles = StyleSheet.create({});

const Input = () => {
  return (
    <View
      style={[
        GlobalCSS.row,
        GlobalCSS.padding.ymd,
        GlobalCSS.alignItemsCenter,
      ]}>
      <Image
        style={{width: 40, height: 40, borderRadius: 20}}
        source={{
          uri: 'https://images.unsplash.com/photo-1646404464819-523c6fef3707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
        }}
      />
      <View
        style={{
          flex: 1,
          borderColor: 'red',
          borderWidth: 1,
          paddingVertical: 10,
          borderRadius: 10,
        }}>
        <TextInput
          multiline
          style={[GlobalCSS.padding.xxs, GlobalCSS.spacing.pr15]}
        />
      </View>
      <View>
        <P>POST</P>
      </View>
    </View>
  );
};
