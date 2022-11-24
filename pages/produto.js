import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import BarraBottom from "../components/barraBottom";
import { AntDesign } from "@expo/vector-icons";
import BarraTopo from "../components/barraTopo";

const ProdutoModal = ({ navigation, route }) => {
  const { titulo, img, valor, criador, local } = route.params;
  return (
    <View style={styles.main}>
      <BarraTopo />
      <ImageBackground source={img} style={styles.imagem}></ImageBackground>
      <View style={styles.about}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          {" "}
          {titulo}{" "}
        </Text>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          {" "}
          {valor}{" "}
        </Text>
        <TouchableOpacity style={styles.comprar}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
            {" "}
            Comprar!
          </Text>
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            {["Criador: ",criador]}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}> 
            {local}
          </Text>
        </View>
      </View>
      <View style={{width: "100%", height: 70  }}>
        <BarraBottom />
      </View>
    </View>
  );
};

export default ProdutoModal;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    height: "100%",
    backgroundColor: "#1D0924",
    alignItems: "center",
  },
  imagem: {
    height: 300,
    width: "100%",
    
  },
  about: {
    
    backgroundColor: "#5956FF",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "43%"
  },
  comprar: {
    backgroundColor: "#59BDF5",
    padding: 18,
    borderRadius: 20,
    marginTop: 20,
  },
  info:{
    backgroundColor: "white",
    height: "34%",
    width: "60%",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});
