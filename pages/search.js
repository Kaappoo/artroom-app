import * as React from "react";
import { useRef } from "react";
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
} from "react-native";
import BarraBottom from "../components/barraBottom";
import BarraTopo from "../components/barraTopo";
const { width, height } = Dimensions.get("screen");

import Lupa from "../img/searchIcon.png";

const DATA_CAROUSEL = [
  "https://viagemeturismo.abril.com.br/wp-content/uploads/2019/03/teamlab.jpg",
  "https://as1.ftcdn.net/v2/jpg/01/99/42/28/1000_F_199422875_2RLcAaIQ6S2G0yis7okytByh1SaB2ZNv.jpg",
  "https://wallpaperaccess.com/full/7280506.jpg",
];

const imageW = width * 0.7;
const imageH = imageW * 0.6;

const Search = () => {
  return (
    <View style={styles.main}>
      <BarraTopo />
      <View style={{ alignItems: "center" }}>
        <View style={styles.search}>
          <Image source={Lupa} style={{ height: 20, width: 20 }} />
          <TextInput style={styles.input} />
        </View>
        <ScrollView>
          <View style={{ marginTop: 30 }}>
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

          </View>
        </ScrollView>
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
    width: 280,
    height: 40,
    padding: 3,
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    width: 210,
    color: "white",
  },
});
