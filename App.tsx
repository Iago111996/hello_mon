import React from "react";
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
 } from '@expo-google-fonts/poppins';

import theme from "./src/global/styles/theme";

import { Home } from "./src/screens/Home";
import { Login } from "./src/screens/Login";
import { Register } from "./src/screens/Register";
import { Initialscreen } from "./src/screens/InitialScreen";

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}
