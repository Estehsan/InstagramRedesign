import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import profileData from '../../assets/data/profileData.json';
import {GlobalCSS, H1, H2, MainBg} from '../../component/basic';

const Profile = () => {
  return (
    <MainBg>
      <FlatList
        ListHeaderComponent={() => <ExtraProfileData />}
        data={profileData.posts}
        numColumns={3}
        renderItem={({item}) => (
          <Image
            style={{flex: 1, aspectRatio: 1, margin: 1, maxWidth: '33%'}}
            source={{
              uri: item.image,
            }}
          />
        )}
      />
    </MainBg>
  );
};

const ExtraProfileData = () => {
  return (
    <>
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
        <H1>{profileData.name}</H1>
      </View>
      <H2>{profileData.bio}</H2>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
