import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {iItem} from '../../../types/model';
import {GlobalCSS, H1, H2, H3, H4, P} from '../../basic';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Col} from '../../../theme';
interface iItemAll {
  item: iItem;
}

const CommentList = ({item}: iItemAll) => {
  return (
    <View style={[GlobalCSS.padding.xsm, GlobalCSS.row, GlobalCSS.margin.ysm]}>
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          marginRight: 10,
        }}
        source={{
          uri: item.User.image,
        }}
      />
      <View
        style={[
          GlobalCSS.row,
          {
            flex: 1,
          },
        ]}>
        <P>
          {item.User?.username}

          <H4> {item.comment}</H4>
        </P>
      </View>
      <View>
        <AntDesign name={'heart'} size={20} color={Col.colors.black} />
      </View>
    </View>
  );
};

export default CommentList;

const styles = StyleSheet.create({});
