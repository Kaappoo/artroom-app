import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/home";
import Perfil from "../pages/perfil";
import Marketplace from "../pages/marketplace";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Perfil">
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
    </Stack.Navigator>
  );
};

export default Routes;
