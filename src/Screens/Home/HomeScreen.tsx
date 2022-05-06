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
// import post from '../../assets/data/post.json';
import {Col, Colors} from '../../theme';
import {Switch} from 'react-native-elements';
import {useSwitchContext} from '../../context/SwitchContext';
// import {listPosts} from '../../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';

export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        image
        images
        video
        noOfComments
        noOfLikes
        untitledfield
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        User {
          id
          Name
          username
          image
        }
        Comments {
          items {
            id
            comment
            User {
              id
              Name
              username
              image
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {setBuyer, buyer} = useSwitchContext();
  const [checked, setChecked] = React.useState(false);

  // fetch POST DATA FROM AMPLIFY

  const [post, setPost] = React.useState([]);

  const fetchData = async () => {
    const response = await API.graphql(graphqlOperation(listPosts));
    console.log('response is here ===> ', response.data.listPosts?.items);
    setPost(response.data?.listPosts?.items);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
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
        <Text>asdsad</Text>
        <Switch value={buyer} onValueChange={value => setBuyer(value)} />

        <Switch value={checked} onValueChange={value => setChecked(value)} />
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
