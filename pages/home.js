import * as React from "react";
import { View, StyleSheet } from "react-native";

import Post from "../components/post";
import BarraBottom from "../components/barraBottom";


const Home = () => {
  return (
    <View style={styles.main}>
      <Post />
      <BarraBottom />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#1D0924",
  },
});

export default Home;
