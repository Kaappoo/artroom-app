import * as React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  Image,
} from "react-native";

import Search from "../img/searchIcon.png";
import Produto from "../components/produtos";
import BarraBottom from "../components/barraBottom";

const Marketplace = () => {
  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <Image source={Search} style={{ height: 20, width: 20 }} />
        <TextInput style={styles.input} />
      </View>
      <Produto />
      <View style={{width: "100%", bottom: 26}}>
        <BarraBottom />
      </View>
    </View>
  );
};

export default Marketplace;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#1D0924",
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  search: {
    borderWidth: 1,
    borderColor: "#C4B6E1",
    borderRadius: 54,
    width: 280,
    height: 40,
    padding: 3,
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    width: 210,
    color: "white",
  },
});
