import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {H3, H4, P, LParagraph, GlobalCSS} from '../basic';
import {Col, Colors} from '../../theme';
import {Avatar} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {iPost} from '../../types/model';
import Carousel from './Carousel';
import {useNavigation} from '@react-navigation/native';

const PostList = ({FeedData}) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const [save, setSave] = useState(false);
  const lastTap = useRef(0);

  const [description, setDescription] = useState(false);

  const onLike = () => {
    setLiked(!liked);
  };
  const onSave = () => {
    setSave(!save);
  };
  const onDescription = () => {
    setDescription(!description);
  };

  const doubleTap = () => {
    const now = Date.now();
    if (lastTap.current && now - lastTap.current < 300) {
      setLiked(!liked);
    }
  };

  let content = null;

  if (FeedData.image) {
    content = (
      <Image
        style={{width: '100%', height: 350, borderRadius: 20}}
        source={{
          uri: FeedData.image,
        }}
      />
    );
  } else if (FeedData.images) {
    content = <Carousel images={FeedData.images} />;
  }

  return (
    <View style={styles.Main}>
      <View style={styles.top}>
        <View style={styles.Left}>
          <Avatar
            size={50}
            rounded
            source={{
              uri: FeedData?.User?.image,
            }}
          />
          <View style={{alignItem: 'center', paddingLeft: 20}}>
            <P>{FeedData.User?.username}</P>
            <LParagraph>{FeedData.createdAt}</LParagraph>
          </View>
        </View>
        <View style={styles.Right}>
          <Entypo name="dots-three-horizontal" size={20} color={'black'} />
        </View>
      </View>

      <Pressable onPress={doubleTap} style={styles.CenterImg}>
        {content}
      </Pressable>

      <View style={styles.DescriptionBox}>
        <TouchableOpacity onPress={onDescription}>
          <Text numberOfLines={description === true ? 0 : 3}>
            {FeedData.description}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Bottom}>
        <View style={styles.likeComment}>
          <TouchableOpacity onPress={onLike}>
            <AntDesign
              name={liked ? 'heart' : 'hearto'}
              size={30}
              color={liked ? 'red' : Col.colors.black}
            />
          </TouchableOpacity>
          <View style={{paddingHorizontal: 10}}>
            <LParagraph>{FeedData.nofLikes}</LParagraph>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Comment', {
                data: FeedData.Comments.items,
              })
            }
            style={[GlobalCSS.row]}>
            <MaterialCommunityIcons
              name="comment-processing-outline"
              size={30}
              color={'black'}
            />
            <View style={{paddingHorizontal: 10}}>
              <LParagraph>{FeedData.nofComments}</LParagraph>
            </View>
          </TouchableOpacity>
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
    backgroundColor: Col.colors.w,
    borderRadius: 20,
    marginVertical: 4,
    ...Col.colors.customShadow1,
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
    ...Col.colors.customShadow1,
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
  DescriptionBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
