import * as React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native";


import Kirby from "../img/kirby.png";
import Post from "../components/post";

const Perfil = () => {
  return (
    <View style={styles.main}>
      <View style={styles.banner}></View>
      <View style={styles.container}>
        <ImageBackground
          source={Kirby}
          resizeMode="cover"
          style={styles.pfp}
        ></ImageBackground>
        <View style={styles.about}>
          <Text>Kappo</Text>
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
  },
});
