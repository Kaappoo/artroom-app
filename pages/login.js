import * as React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Astronauta from "../img/fundoAstrona.jpg";
import Logo from "../img/logoArtroomVetorizada.png";

const Login = () => {
  const navigation = useNavigation();
  const [posicao, setPosicao] = useState(new Animated.Value(1));
  const [altura, setAltura] = useState(new Animated.Value(-600));

  Animated.sequence([
    Animated.timing(posicao, {
      toValue: 800,
      duration: 1000,
    }),
    Animated.timing(altura, {
      toValue: 1,
      duration: 800,
      friction: 3,
    }),
  ]).start();

  return (
    <View style={styles.main}>
      <Animated.Image
        source={Astronauta}
        style={{
          height: posicao,
          width: "100%",

          position: "absolute",
        }}
      />

      <Animated.View style={[styles.container, { bottom: altura }]}>
        <Image
          source={Logo}
          style={{ height: 50, width: 126, marginTop: 20 }}
        />
        <Text
          style={{
            color: "white",
            marginTop: 30,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Login!
        </Text>
        <View style={styles.input}>
          <AntDesign name="user" size={24} color="white" />
          <TextInput
            placeholder="usuario"
            placeholderTextColor={"white"}
            style={{ width: 180, color: "white", paddingLeft: 10 }}
          />
        </View>
        <View style={styles.input}>
          <Entypo name="lock" size={24} color="white" />
          <TextInput
            placeholder="senha"
            placeholderTextColor={"white"}
            style={{ width: 180, color: "white", paddingLeft: 10 }}
          />
        </View>
        <TouchableOpacity style={styles.botao}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}  onPress={() => navigation.navigate("Home")}>
            Entrar
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            marginTop: 30,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          Ainda não possui conta?
        </Text>
      <TouchableOpacity style={styles.cadastro}>
          <Text style={{ color: "#59BDF5", fontWeight: "bold", fontSize: 15 }}>
            Criar 
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#1D0924",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#1D0924",
    height: 600,
    width: "100%",
    position: "absolute",
    zIndex: 999,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    padding: 20,
  },
  input: {
    borderWidth: 3,
    borderColor: "white",
    width: 230,
    height: 50,
    borderRadius: 40,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  botao: {
    height: 48,
    width: 180,
    backgroundColor: "#6022E2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 50,
  },
  cadastro:{
    marginTop: 10
  }
});
