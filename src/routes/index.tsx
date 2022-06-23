import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { Load } from "../components/Load";

export function Routes() {
  //   const { user, loadingAuth } = useAuth();

  if (false) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Load />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
