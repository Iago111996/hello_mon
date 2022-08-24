import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.tab.routes";

import { useAuth } from "../hooks/useAuth";
import { AuthProvider } from "../context/auth";

import { Load } from "../components/Load";

export function Routes() {
  const { user, loadingAuth } = useAuth();

  return (
    <NavigationContainer>
        {loadingAuth ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
