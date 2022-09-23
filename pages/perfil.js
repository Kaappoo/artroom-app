import * as React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  Animated,
  Image,
} from "react-native";

import BarraTopo from "../components/barraTopo";
import PostsLayout from "../components/postsLayout";

import User from "../img/brtt.png";
import Kirby from "../img/kirby.png";
import Homem from "../img/homem.jpg";
import ArteLinda from "../img/artelinda.jpg";
import Pintura from "../img/pintura.jpg";

const DUMMY = [
  {
    img: Homem,
    userImg: User,
    userName: "@Brtt",
    text: "me deem feedback",
  },
  {
    img: ArteLinda,
    userImg: Kirby,
    userName: "@Kappo",
    text: "eu que pintei",
  },
  {
    img: Pintura,
    userImg: Kirby,
    userName: "@Kappo",
    text: "to vendendo comprem",
  },
];

const Perfil = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <View style={styles.main}>
      <View style={{zIndex: 999}}>
        <BarraTopo />
      </View>
      <Animated.View
        style={[
          styles.banner,
          {
            height: scrollY.interpolate({
              inputRange: [0, 250],
              outputRange: [160, 0],
            }),
          },
        ]}
      ></Animated.View>

      <Animated.Image source={Kirby} style={[styles.pfp, {top: scrollY.interpolate({
              inputRange: [0, 250],
              outputRange: [200, 70],
            }),
            height: scrollY.interpolate({
              inputRange: [0, 100, 250],
              outputRange: [130, 130, 20],
            }),
            width: scrollY.interpolate({
              inputRange: [0, 100, 250],
              outputRange: [130, 130, 20],
            }),}]}/>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          flexDirection: "column",
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          {
            useNativeDriver: false,
          }
        )}
      >
        <View style={styles.bio}><Text>opaaa</Text></View>
        <View>
          <PostsLayout
            userImg={DUMMY[1].userImg}
            userName={DUMMY[1].userName}
            text={DUMMY[1].text}
            post={DUMMY[1].img}
          />
          <PostsLayout
            userImg={DUMMY[2].userImg}
            userName={DUMMY[2].userName}
            text={DUMMY[2].text}
            post={DUMMY[2].img}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  banner: {
    width: "100%",

    backgroundColor: "#6FB0ED",
  },
  pfp: {
    position: "absolute",
    
    width: 130,
    resizeMode: "cover",
    alignSelf: "center",
    
    borderRadius: 130 / 2,
    overflow: "hidden",
    borderColor: "#1D0924",
    borderWidth: 4,
    zIndex: 990,
  },
  scroll: {
    backgroundColor: "#1D0924",
  },
  bio: {
    height: 120,
    width: 200,
    backgroundColor: "#DCCEF9",
    borderRadius: 20,
    marginTop: 80,
  },
});
