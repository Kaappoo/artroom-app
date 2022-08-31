import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import Search from "../img/searchIcon.png";
import Chat from "../img/chatIcon.png";
import House from "../img/houseIcon.png";

const BarraBottom = () => {
  return (
    <View style={joao.barra}>
      <TouchableOpacity>
        <Image source={House} style={{ width: 32, height: 32 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Search} style={{ width: 32, height: 32 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Chat} style={{ width: 32, height: 32 }} />
      </TouchableOpacity>
    </View>
  );
};

export default BarraBottom;

const joao = StyleSheet.create({
  barra: {
    width: "100%",
    backgroundColor: "#1D0924",
    bottom: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 110,
    paddingTop: 18,
    border: 10,
    borderColor: "white",
  },
});
