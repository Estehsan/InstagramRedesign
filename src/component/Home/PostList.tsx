import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {H3, H4, P, LParagraph} from '../basic';
import {Colors} from '../../theme';
import {Avatar} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {iPost} from '../../types/model';

interface iFeedPost {
  FeedData: iPost;
}

const PostList = ({FeedData}: iFeedPost) => {
  const [liked, setLiked] = useState(false);
  const [save, setSave] = useState(false);

  const onLike = () => {
    setLiked(!liked);
  };
  const onSave = () => {
    setSave(!save);
  };

  return (
    <View style={styles.Main}>
      <View style={styles.top}>
        <View style={styles.Left}>
          <Avatar
            size={50}
            rounded
            source={{
              uri: FeedData.user.image,
            }}
          />
          <View style={{alignItem: 'center', paddingLeft: 20}}>
            <P>{FeedData.user.username}</P>
            <LParagraph>{FeedData.createdAt}</LParagraph>
          </View>
        </View>
        <View style={styles.Right}>
          <Entypo name="dots-three-horizontal" size={20} color={'black'} />
        </View>
      </View>

      <View style={styles.CenterImg}>
        <Image
          style={{width: '100%', height: 350, borderRadius: 20}}
          source={{
            uri: FeedData.image,
          }}
        />
      </View>
      <View style={styles.Bottom}>
        <View style={styles.likeComment}>
          <TouchableOpacity onPress={onLike}>
            <AntDesign
              name={liked ? 'heart' : 'hearto'}
              size={30}
              color={liked ? 'red' : Colors.colors.black}
            />
          </TouchableOpacity>
          <View style={{paddingHorizontal: 10}}>
            <LParagraph>{FeedData.nofLikes}</LParagraph>
          </View>
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={30}
            color={'black'}
          />
          <View style={{paddingHorizontal: 10}}>
            <LParagraph>{FeedData.nofComments}</LParagraph>
          </View>
        </View>
        <View style={styles.Save}>
          <TouchableOpacity onPress={onSave}>
            <FontAwesome
              name={save ? 'bookmark' : 'bookmark-o'}
              size={30}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  Main: {
    width: '96%',
    marginHorizontal: '2%',
    backgroundColor: Colors.colors.w,
    borderRadius: 20,
    marginVertical: 4,
    ...Colors.colors.customShadow1,
  },

  top: {
    width: '100%',
    flexDirection: 'row',
    padding: 20,
  },
  CenterImg: {
    width: '100%',
    paddingHorizontal: '5%',
    borderRadius: 20,
    ...Colors.colors.customShadow1,
  },
  Left: {
    alignItems: 'center',
    width: '80%',
    flexDirection: 'row',
  },
  Right: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Bottom: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    display: 'flex',
  },
  likeComment: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: '50%',
  },
  Save: {
    width: '50%',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
});
