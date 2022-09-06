import * as React from 'react';
import { View, ScrollView, FlatList } from 'react-native';


import PostsLayout from './postsLayout';

import User from '../img/brtt.png';
import Kirby from '../img/kirby.png';
import Homem from '../img/homem.jpg'
import ArteLinda from '../img/artelinda.jpg';
import Pintura from '../img/pintura.jpg';

const DUMMY = [
  {
    img: Homem,
    userImg: User,
    userName: "@Brtt",
    text: "me deem feedback"
  },
  {
    img: ArteLinda,
    userImg: Kirby,
    userName: "@Kappo",
    text: "eu que pintei"
  },
  {
    img: Pintura,
    userImg: Kirby,
    userName: "@Kappo",
    text: "to vendendo comprem"
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
      <View ></View>
      </View>
    )
  }
  
  export default Posts;