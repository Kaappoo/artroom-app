import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';




import Logo from '../img/logoArtroomVetorizada.png';
import User from '../img/kirby.png';


const barraTopo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topo}>
      <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
      <Image source={User} style={{height: 55, width: 55, borderRadius: 60}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Image source={Logo} style={{height: 35, width: 86}}/>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  topo:{
    backgroundColor: "#1D0924",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 3,
    
  }
})

export default barraTopo;