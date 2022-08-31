import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Like from "../img/white-like-icon-png-20.png";
import Comment from "../img/comenteraio.png";
import * as Font from "expo-font";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const fetchFonts = () => {
  return Font.loadAsync({
    "baloo-thambi": require("../assets/fonts/BalooThambi2-VariableFont_wght.ttf"),
  });
};
const postsLayout = (props) => {
  return (
    <View style={bosta.post}>
      <ImageBackground source={props.post} style={bosta.imagem}>
        <View style={bosta.usuario}>
          <Image
            source={props.userImg}
            style={{ height: 55, width: 55, borderRadius: 60 }}
          />
          <Text
            style={{
              fontSize: 25,
              color: "white",
              fontFamily: "baloo-thambi",
            }}
          >
            {props.userName}
          </Text>
        </View>
      </ImageBackground>
      <View>
        <Text style={{ textAlign: "left", marginTop: 20, fontSize: 15 }}>
          {props.text}
        </Text>
      </View>
      
        <TouchableOpacity>
          <AntDesign name="like2" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="comment-alt" size={24} color="black" />
        </TouchableOpacity>
    </View>
  );
};

export default postsLayout;

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
  like:{
    display: "flex",
    width: "100%",
    flexDirection: "row",
  }
  
});
