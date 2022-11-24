import * as React from "react";
const { width, height } = Dimensions.get("screen");
import {
  View,
  ImageBackground,
  Dimensions,
  Animated,
  Image,
} from "react-native";
import { useState } from "react";
import { GestureHandler } from "expo";
import { State, PinchGestureHandler } from "react-native-gesture-handler";

const Imagem = ({ navigation, route }) => {
  const { img } = route.params;
  let [scale, setScale] = useState(new Animated.Value(1));
  let onPinchEvent = Animated.event([{ nativeEvent: { scale: scale } }], {
    useNativeDriver: true,
  });
  return (
    <View>
      <PinchGestureHandler onGestureEvent={onPinchEvent}>
        <Animated.Image
          source={img}
          style={[
            { width, height, backgroundColor: "black" },
            { transform: [{ scale: scale }] },
          ]}
          resizeMode="contain"
        />
      </PinchGestureHandler>
    </View>
  );
};

export default Imagem;
