import * as React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

const Conversa = ({ route }) => {
  const { user, img, messages } = route.params;
  const navigation = useNavigation();
  const[mensagens, setMensagens]  = useState([messages[0]]);
  return (
    <View style={styles.main}>
      <View style={styles.topo}>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: 55, width: 55, borderRadius: 60 }}
            source={img}
          />
          <Text style={{ color: "white", fontSize: 20 }}> {user} </Text>
        </View>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
      <View style={styles.conversa}>
        <FlatList
          data={mensagens}
          renderItem={({ item }) => (
            <View style={{ width: "100%", backgroundColor: "white" }}>
              <View>
                <Text style={{ fontSize: 20 }}>{item}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.input}>
        <Entypo name="emoji-happy" size={24} color="black" />
        <View style={styles.digitador}>
          <TextInput
            placeholderTextColor={"#A58CDB"}
            placeholder="Digite sua mensagem.."
          />
        </View>
        <TouchableOpacity onPress={() => {setMensagens([...mensagens, messages[Math.floor(Math.random() * 4)]])}} >
          <FontAwesome name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Conversa;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#1D0924",
  },
  topo: {
    flex: 1.2,
    flexDirection: "row",
    backgroundColor: "#A58CDB",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  conversa: {
    flex: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#A58CDB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  digitador: {
    backgroundColor: "#6022E2",
    paddingVertical: 7,
    paddingRight: 60,
    borderRadius: 20,
    paddingLeft: 14,
  },
});
