import * as React from "react";
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
} from "react-native";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";

import User from "../img/brtt.png";
import Kirby from "../img/kirby.png";
import Homem from "../img/homem.jpg";
import ArteLinda from "../img/artelinda.jpg";
import Pintura from "../img/pintura.jpg";
import { useNavigation } from "@react-navigation/native";

const DUMMY = [
  {
    img: Homem,
    userImg: User,
    userName: "@Brtt",
    text: "me deem feedback",
  },
  {
    img: ArteLinda,
    userImg: Kirby,
    userName: "@Kappo",
    text: "eu que pintei",
  },
  {
    img: Pintura,
    userImg: Kirby,
    userName: "@Kappo",
    text: "to vendendo comprem",
  },
];

const Posts = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={bosta.post}>
      <TouchableOpacity onPress={() => navigation.navigate("Imagem", item)}>
        <ImageBackground source={item.img} style={bosta.imagem}  >
          <View style={bosta.usuario}>
            <Image
              source={item.userImg}
              style={{ height: 55, width: 55, borderRadius: 60 }}
            />
            <Text
              style={{
                fontSize: 25,
                color: "white",
              }}
            >
              {item.userName}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View>
        <Text style={{ textAlign: "left", marginTop: 20, fontSize: 15 }}>
          {item.text}
        </Text>
      </View>
      <View style={bosta.like}>
        <TouchableOpacity>
          <AntDesign name="like2" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="comment-alt" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        data={DUMMY}
        renderItem={renderItem}
        keyExtractor={(item) => item.text}
      />
      <View></View>
    </View>
  );
};

export default Posts;

const bosta = StyleSheet.create({
  post: {
    width: 290,
    height: 400,
    backgroundColor: "#C4B6E1",
    display: "flex",
    alignItems: "center",
    padding: 16,
    marginTop: 20,
  },
  imagem: {
    width: 270,
    height: 270,
    borderRadius: 5,
    overflow: "hidden",
    display: "flex",
    justifyContent: "flex-end",
  },
  usuario: {
    backgroundColor: "rgba(22, 23, 23, 0.3)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  like: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});
