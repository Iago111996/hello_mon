import React from "react";
import { useTheme } from "styled-components";

import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/auth.routes";

import { Container, SettingTop, WrapperButton } from "./styles";

import { Button } from "../../components/Button";

interface RoutesProps extends StackNavigationProp<RootStackParamList> {}

export function Initialscreen() {
  const theme = useTheme();

  const navigation = useNavigation<RoutesProps>();
  const route = useRoute();

  function handleNewLogin() {
    navigation.navigate("Login");
  }

  function handleNewRegister() {
    navigation.navigate("Register");
  }

  return (
    <Container>
      <SettingTop
        height={50}
        resizeMode="cover"
        source={require("../../assets/bg_setting_top.png")}
      />

      <WrapperButton>
        <Button title="Login" onPress={() => handleNewLogin()} />

        <Button
          title="Registre-se"
          onPress={() => handleNewRegister()}
          color={theme.colors.secondary}
        />
      </WrapperButton>
    </Container>
  );
}
