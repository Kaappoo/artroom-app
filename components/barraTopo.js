import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation, Route, useRoute } from "@react-navigation/native";
import { useState } from "react";

import { AntDesign } from "@expo/vector-icons";

import Logo from "../img/logoArtroomVetorizada.png";
import User from "../img/kirby.png";

const barraTopo = (props) => {
  const [posicao, setPosicao] = useState(new Animated.Value(600));
  const abreSide = () => {
    Animated.sequence([
      Animated.timing(posicao, {
        toValue: 80,
        duration: 400,
        friction: 3,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const fechaSide = () => {
    Animated.sequence([
      Animated.timing(posicao, {
        toValue: 600,
        duration: 300,
        friction: 3,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={[styles.topo]}>
      {route.name == "Perfil" ? (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => abreSide()}>
          <Image
            source={User}
            style={{ height: 55, width: 55, borderRadius: 60 }}
          />
        </TouchableOpacity>
      )}

      <View>
        <Image source={Logo} style={{ height: 35, width: 88 }} />
      </View>
      <Animated.View style={[styles.side, { right: posicao }]}>
        <View style={styles.sideitens}>
          <View style={styles.sideMenu}>
            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
              <Image
                source={User}
                style={{
                  height: 75,
                  width: 75,
                  borderRadius: 60,
                  marginLeft: 13,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 26,
                fontWeight: "600",
                marginLeft: 13,
                marginBottom: 50,
              }}
            >
              Kappo
            </Text>
            <View style={styles.botoes}>
              <TouchableOpacity style={styles.botao1}></TouchableOpacity>
              <TouchableOpacity style={styles.botao2}></TouchableOpacity>
              <TouchableOpacity style={styles.botao3}></TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.sidefora}
          onPress={() => fechaSide()}
        ></TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  topo: {
    backgroundColor: "#1D0924",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 3,
    zIndex: 9990,
  },
  side: {
    position: "absolute",
    height: "1440%",
    width: "100%",
    zIndex: 9999,
    flexDirection: "row",
    top: 0,
  },
  sideitens: {
    backgroundColor: "#D3CCE2",
    width: 240,
    height: "100%",
    paddingTop: 80,
  },
  sidefora: {
    height: "100%",
    width: 100,
  },
  sideMenu: {},
  botoes: {
    justifyContent: "space-evenly",
    height: 400,
  },
  botao1: {
    backgroundColor: "#6FB0ED",
    height: 60,
    width: "80%",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  botao2: {
    backgroundColor: "#F54599",
    height: 60,
    width: "80%",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  botao3: {
    backgroundColor: "#7048C3",
    height: 60,
    width: "80%",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default barraTopo;
