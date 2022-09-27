import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";


const coco = (props) => {
  return (
    <View style={bosta.post}>
      <TouchableOpacity onPress={props.onClick}>
      <ImageBackground source={props.post} style={bosta.imagem}  >
        <View style={bosta.usuario}>
          <Image
            source={props.userImg}
            style={{ height: 55, width: 55, borderRadius: 60 }}
          />
          <Text
            style={{
              fontSize: 25,
              color: "white",
              
            }}
          >
            {props.userName}
          </Text>
        </View>
      </ImageBackground>
      </TouchableOpacity>
      <View>
        <Text style={{ textAlign: "left", marginTop: 20, fontSize: 15 }}>
          {props.text}
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
};

export default coco;

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
    marginTop: 20
  },
});
