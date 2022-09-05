import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";

const ProdutoModal = ({ navigation, route }) => {
  const { titulo, img, valor } = route.params;
  return (
    <View style={styles.main}>
      <ImageBackground source={img} style={styles.imagem}></ImageBackground>
      <Text> {titulo} </Text>
    </View>
  );
};

export default ProdutoModal;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    height: "100%",
    backgroundColor: "#1D0924",
  },
  imagem:{
    height: 300,
    width: 280,
  }
});
