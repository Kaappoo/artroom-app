import * as React from "react";
import { FlatList, View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Pintura from '../img/pintura.jpg';


const DUMMY = [
    {
        img: Pintura,
        titulo: "pintura linda",
        valor: "25$$"
    },
    {
        img: Pintura,
        titulo: "postei duas vezes",
        valor: "25$$"
    },
    {
        img: Pintura,
        titulo: "como apaga",
        valor: "25$$"
    },
]

const Produtos = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <ImageBackground source={item.img} style={styles.produto}>
            <View style={{flex: 3}}>

            </View>
            <View style={styles.info}>
                <Text style={{fontSize: 22, fontWeight: "bold"}}>
                    {item.titulo}
                </Text>
                <Text style={{fontSize: 22,  fontWeight: "bold"}}>
                    {item.valor}
                </Text>
            </View>
            <TouchableOpacity style={styles.butao}  onPress={() => navigation.navigate("Produto", item)}>
                <Text style={{fontSize: 22,  fontWeight: "bold"}}>
                    Ver mais!
                </Text>
            </TouchableOpacity>
        </ImageBackground>
      );
    return(
        <View>
        <FlatList
        data={DUMMY}
        renderItem={renderItem}
        keyExtractor={item => item.titulo}
      />
      </View>
    )
}

export default Produtos;

const styles = StyleSheet.create({
    produto:{
        height: 300,
        width: 270,
        borderRadius: 20,
        overflow: "hidden",
        marginTop: 30,

    },
    info:{
        backgroundColor: "white",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        
    },
    butao:{
        flex: 1,
        backgroundColor: "#59BDF5",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    }
})