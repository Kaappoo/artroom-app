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
import Homem from "../img/homem.jpg";
import ArteLinda from "../img/artelinda.jpg";
import Pintura from "../img/pintura.jpg";

const DUMMY = [
  {
    user: "desconhecido",
    img: User,
    lastMsg: "oi eu sou o brtt eu tenho milhoes de cblols",
    messages: ["hora do brtt","eu sou o brtt eu juro", "eu tipo ganhei o cblol umas vezes", "tudo congelo e ehoje eu to mto flex kkkkk"]
  },
  {
    user: "kirby",
    img: Kirby,
    lastMsg: "carai que fome",
    messages: ["oi","eu sou tão rosa", "eu vou eh comer tudo", "bola rosa"]
  },
  {
    user: "Brtt ",
    img: User,
    lastMsg: "mano tem um maluco se passando por mim wtf",
    messages: ["oi me ajuda aquele brtt nao eh eu","nao cara falando serio tem um cara fingindo ser eu", "ajuda namoral", "bane ele sla"]
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
