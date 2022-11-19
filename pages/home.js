import * as React from "react";
import { View, StyleSheet } from "react-native";

import Post from "../components/post";
import BarraBottom from "../components/barraBottom";
import FabButton from "../components/fabButton";
import BarraTopo from "../components/barraTopo";

const Home = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <BarraTopo />
      <View style={{ height: "78%" }}>
        <Post />
      </View>
      <BarraBottom />

      <FabButton style={{ bottom: 150, right: 60 }} />
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
