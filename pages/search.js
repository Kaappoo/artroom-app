import * as React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  Animated,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BarraBottom from "../components/barraBottom";
import BarraTopo from "../components/barraTopo";
const { width, height } = Dimensions.get("screen");
import { useNavigation } from "@react-navigation/native";

import Logo from "../img/logoArtroomVetorizada.png";
import User from "../img/kirby.png";
import Lupa from "../img/searchIcon.png";

const DATA_CAROUSEL = [
  "https://viagemeturismo.abril.com.br/wp-content/uploads/2019/03/teamlab.jpg",
  "https://as1.ftcdn.net/v2/jpg/01/99/42/28/1000_F_199422875_2RLcAaIQ6S2G0yis7okytByh1SaB2ZNv.jpg",
  "https://wallpaperaccess.com/full/7280506.jpg",
];

const imageW = width * 0.7;
const imageH = imageW * 0.6;

const Search = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <Animated.View style={[styles.topo, {paddingHorizontal: scrollY.interpolate({
          inputRange: [0, 70],
          outputRange: [40, 36 ]
        })}]}>
        <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Image
            source={User}
            style={{ height: 55, width: 55, borderRadius: 60 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={Logo} style={{ height: 35, width: 86,  }} />
        </TouchableOpacity>
      </Animated.View>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Animated.View style={[styles.search, {bottom: scrollY.interpolate({
          inputRange: [0, 70],
          outputRange: [570, 583 ]
        }), width: scrollY.interpolate({
          inputRange: [0, 70],
          outputRange: [280, 250]
        }) }]}>

          <Image source={Lupa} style={{ height: 20, width: 20 }} />
          <TextInput style={styles.input} />
        </Animated.View>
        <ScrollView
          style={{ height: "100%" }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollY },
                },
              },
            ],
            {
              useNativeDriver: false,
            }
          )}
        >
          <View style={{ marginTop: 60 }}>
            <FlatList
              data={DATA_CAROUSEL}
              keyExtractor={(index) => index.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      width,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: item }}
                      style={{
                        width: imageW,
                        height: imageH,
                        resizeMode: "cover",
                        borderRadius: 20,
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.sugestoes}>
            <View
              style={{
                width: 200,
                height: 140,
                backgroundColor: "#6022E2",
                borderRadius: 20,
                marginTop: 16,
              }}
            ></View>
            <View
              style={{
                width: 100,
                height: 140,
                backgroundColor: "#F1EDFA",
                borderRadius: 20,
                marginTop: 16,
              }}
            ></View>
            <View
              style={{
                width: 100,
                height: 140,
                backgroundColor: "white",
                borderRadius: 20,
                marginTop: 16,
              }}
            ></View>
            <View
              style={{
                width: 200,
                height: 140,
                backgroundColor: "#59BDF5",
                borderRadius: 20,
                marginTop: 16,
              }}
            ></View>
            <View
              style={{
                width: 200,
                height: 140,
                backgroundColor: "#5956FF",
                borderRadius: 20,
                marginTop: 16,
              }}
            ></View>
            <View
              style={{
                width: 100,
                height: 140,
                backgroundColor: "#C4B6E1",
                borderRadius: 20,
                marginTop: 16,
              }}
            ></View>
            <View
              style={{
                width: 100,
                height: 140,
                backgroundColor: "white",
                borderRadius: 20,
                marginTop: 16,
              }}
            ></View>
            <View
              style={{
                width: 200,
                height: 140,
                backgroundColor: "white",
                borderRadius: 20,
                marginTop: 16,
              }}
            ></View>
          </View>
        </ScrollView>
      </View>
      <View style={{ height: 70,  }}>
        <BarraBottom />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#1D0924",
    flex: 1,
  },
  search: {
    borderWidth: 1,
    borderColor: "#C4B6E1",
    borderRadius: 54,
    height: 40,
    padding: 3,
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    zIndex: 999,
   
  },
  input: {
    width: "80%",
    color: "white",
  },
  sugestoes: {
    backgroundColor: "#D3CCE2",
    height: 700,
    marginTop: 40,
    justifyContent: "space-evenly",

    flexDirection: "row",
    flexWrap: "wrap",
  },
  topo: {
    backgroundColor: "#1D0924",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    
    marginBottom: 3,
    position: "relative",
  },
});
