import * as React from 'react';
import { View, ScrollView, FlatList } from 'react-native';


import PostsLayout from './postsLayout';

import User from '../img/brtt.png';
import Medicina from '../img/medicina.jpg';
import ArteLinda from '../img/artelinda.jpg';

const DUMMY = [
  {
    img: Medicina,
    userImg: User,
    userName: "@Brtt",
    text: "eu amo medicina"
  },
  {
    img: Medicina,
    userImg: User,
    userName: "@Brtt",
    text: "opa"
  },
  {
    img: ArteLinda,
    userImg: User,
    userName: "@Brtt",
    text: "bunda"
  },
]

const Posts = () => {
  const renderItem = ({ item }) => (
    <PostsLayout post={item.img} userImg={item.userImg} userName={item.userName} text={item.text}/>
  );
    return(
      <View>
      <FlatList
        data={DUMMY}
        renderItem={renderItem}
        keyExtractor={item => item.text}
      />
      </View>
    )
  }
  
  export default Posts;