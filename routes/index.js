import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/home";
import Perfil from "../pages/perfil";
import Marketplace from "../pages/marketplace";
import Produto from "../pages/produto";
import Login from "../pages/login";
import Search from "../pages/search";
import Imagem from '../pages/imagem';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Marketplace"
        component={Marketplace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Produto"
        component={Produto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Imagem"
        component={Imagem}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
