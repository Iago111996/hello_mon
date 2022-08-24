import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Initialscreen } from "../screens/InitialScreen";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Initialscreen: undefined;
};

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="Initialscreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen component={Login} name="Login" />
      <Screen component={Register} name="Register" />
      <Screen component={Initialscreen} name="Initialscreen" />
    </Navigator>
  );
}
