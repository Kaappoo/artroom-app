import * as React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Animated,
  TouchableHighlight,
  Image,
} from "react-native";

import Astronauta from "../img/fundoAstrona.jpg";

const Login = () => {
  const [posicao, setPosicao] = useState(new Animated.Value(1000));

  Animated.timing(posicao, {
    toValue: 0,
    duration: 500,
  }).start();
  return (
    <View style={styles.main}>
      <Animated.Image
        source={Astronauta}
        style={{
          height: "100%",
          resizeMode: "cover",
          width: "100%",
          top: posicao,
        }}
      />
      <Animated.View>
        
      </Animated.View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#1D0924",
    flex: 1,
  },
});
