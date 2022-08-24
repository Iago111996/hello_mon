import React, { useState } from "react";
import { useTheme } from "styled-components";

import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/auth.routes";

import { Signout } from "react-native-unicons";

import {
  ButtonEdit,
  ButtonText,
  Container,
  Header,
  Main,
  Title,
} from "./styles";

interface RoutesProps extends StackNavigationProp<RootStackParamList> {}

export function SettingsPage() {
  const theme = useTheme();

  const navigation = useNavigation<RoutesProps>();
  const route = useRoute();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <Title>Configurações</Title>
      </Header>

      <Main>
        <ButtonEdit>
          <ButtonText></ButtonText>
        </ButtonEdit>
      </Main>
    </Container>
  );
}
