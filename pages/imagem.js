import * as React from "react";
const { width, height } = Dimensions.get("screen");
import { View, ImageBackground, Dimensions } from "react-native";

const Imagem = ({ navigation, route }) =>{
    const {  img } = route.params;
    return(
        <ImageBackground source={img} style={{ width, height, backgroundColor:"black"  }} resizeMode="contain">
            
        </ImageBackground>
    )
}

export default Imagem;