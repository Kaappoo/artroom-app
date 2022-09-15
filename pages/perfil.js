import * as React from "react";
import { useRef } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  Animated,
} from "react-native";


import Kirby from "../img/kirby.png";
import BarraTopo from '../components/barraTopo';
import Post from "../components/post";

const Perfil = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.main}>
      <BarraTopo />
      <View style={styles.banner}></View>
      <View style={styles.container}>
        <ImageBackground
          source={Kirby}
          resizeMode="cover"
          style={styles.pfp}
        ></ImageBackground>
        <View style={styles.about}>
          <Text style={{ color: "white", fontSize: 23 }}>Kappo</Text>
          <View style={styles.bio}>
            <Text>Oi meu nome e kaua eu amo arte :3</Text>
            <View style={styles.tags}>
              <ScrollView horizontal={true}>
                <View style={styles.tag}>
                <Text>Arte</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={styles.feed}>
          <Post />
        </View>
      </View>
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    height: "100%",
  },
  banner: {
    flex: 1,
    backgroundColor: "blue",
  },
  container: {
    flex: 3,
    backgroundColor: "#1D0924",
    display: "flex",
    alignItems: "center",
  },
  pfp: {
    width: 160,
    height: 160,
    borderRadius: 200,
    overflow: "hidden",
    position: "absolute",
    bottom: "85%",
    left: "27%",
    borderColor: "#1D0924",
    borderWidth: 7,
  },
  about: {
    display: "flex",
    height: 70,
    top: "15%",
    width: 200,
    alignItems: "center",
  },
  feed: {
    display: "flex",
    alignItems: "center",
    marginTop: 150,
  },
  bio: {
    backgroundColor: "#DCCEF9",
    marginTop: 13,
    borderRadius: 15,
    padding: 10,
  },
  tags:{
    borderTopColor: "#4138AC",
    borderTopWidth: 2
  },
  tag:{
    backgroundColor:"#5828BF",
    height: 24,
    marginRight: 10,
    marginTop: 6,
    width: 50,
    borderRadius: 20,
    display: "flex",
    justifyContent:"center",
    alignItems:"center"
  }
});
