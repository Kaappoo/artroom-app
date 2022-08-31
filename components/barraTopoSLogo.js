import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


import Logo from '../img/logoArtroomVetorizada.png';
import User from '../img/brtt.png';

const barraTopo = () => {
  return (
    <View style={styles.topo}>

      <Image source={User} style={{height: 55, width: 55, borderRadius: 60}}/>
      
    </View>
  )
};

const styles = StyleSheet.create({
  topo:{
    backgroundColor: "#1D0924",
    display: "flex",
    justifyContent: "flex-start",
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