import * as React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import BarraBottom from "../components/barraBottom";
import BarraTopo from "../components/barraTopo";

import User from "../img/brtt.png";
import Kirby from "../img/kirby.png";
import Darwin from "../img/darwin.png";

const DUMMY = [
  {
    user: "Darwin",
    img: Darwin,
    lastMsg: "Olá",
    messages: ["Olá amigo","como você está", "Gumball meu irmão", "Eu sou um peixe"]
  },
  {
    user: "kirby",
    img: Kirby,
    lastMsg: "Que fome",
    messages: ["oi","eu sou rosa", "Kirby", "esfera rosa"]
  },
  {
    user: "Brtt ",
    img: User,
    lastMsg: "Opa eae cara",
    messages: ["Oi meu mano","Eu vou lançar umas musicas", "Sim", "Não"]
  },
];

const Chat = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <BarraTopo />
      <View style={{height: "79%"}}>
        <FlatList
          data={DUMMY}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("Conversa", item)} style={styles.chat}>
              <Image
                style={{ height: 55, width: 55, borderRadius: 60 }}
                source={item.img}
              />
              <View style={styles.punda}>
                <Text style={{ fontSize: 14, color: "white" }}>
                  {item.user}
                </Text>
                <Text
                  style={{ fontSize: 16, color: "white" }}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.lastMsg}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.text}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BarraBottom />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",

    backgroundColor: "#1D0924",
    height: "100%",
    width: "100%",
  },
  chat: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    height: 80,
  },
  punda: {
    width: "75%",
    justifyContent: "center",
    marginLeft: 10,
  },
});
