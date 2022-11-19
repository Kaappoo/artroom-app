import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Search from "../img/searchIcon.png";
import Chat from "../img/chatIcon.png";
import House from "../img/houseIcon.png";
import { Entypo } from "@expo/vector-icons";

const BarraBottom = () => {
  const navigation = useNavigation();
  return (
    <View style={joao.barra}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}> 
        <Image source={House} style={{ width: 32, height: 32 }} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("Search")}>
        <Image source={Search} style={{ width: 32, height: 32 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Image source={Chat} style={{ width: 32, height: 32 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Marketplace")}>
        <Entypo name="shop" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default BarraBottom;

const joao = StyleSheet.create({
  barra: {
    width: "100%",
    backgroundColor: "#1D0924",
    
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    
    paddingTop: 18,
    border: 10,
    borderColor: "white",
  },
});
