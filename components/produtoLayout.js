import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import Pintura from '../img/pintura.jpg'

const ProdutoLayout = () => {
    <TouchableOpacity style={{width: "70%", height: 300}}>
        <ImageBackground source={Pintura} style={styles.produto}>

        </ImageBackground>
    </TouchableOpacity>
}

export default ProdutoLayout;

const styles = StyleSheet.create({
    produto:{
        height: 300,
        width: "70%"
    }
})