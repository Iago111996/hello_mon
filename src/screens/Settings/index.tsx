import React, { useState } from "react";
import { useTheme } from "styled-components";

import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/auth.routes";

import {
  Signout,
  ArrowRight,
  QuestionCircle,
  CalendarAlt,
  Sitemap,
} from "react-native-unicons";

import {
  ButtonEdit,
  ButtonText,
  ComingSoon,
  Container,
  Header,
  Main,
  Prefix,
  Title,
  Wrapper,
} from "./styles";
import { useAuth } from "../../hooks/useAuth";

interface RoutesProps extends StackNavigationProp<RootStackParamList> {}

export function SettingsPage() {
  const theme = useTheme();

  const { signOut } = useAuth();

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
        <Prefix>Tema da aplicação</Prefix>

        <ButtonEdit activeOpacity={.7}>
          <Wrapper>
            <Sitemap width={18} height={18} color={theme.colors.text} />
            <ButtonText>Neutro</ButtonText>
            <ComingSoon>Em breve</ComingSoon>
          </Wrapper>

          <ArrowRight width={28} height={28} color={theme.colors.text} />
        </ButtonEdit>

        <ButtonEdit activeOpacity={.7}>
          <Wrapper>
            <Sitemap width={18} height={18} color={theme.colors.text} />
            <ButtonText>Femenino</ButtonText>
            <ComingSoon>Em breve</ComingSoon>
          </Wrapper>

          <ArrowRight width={28} height={28} color={theme.colors.text} />
        </ButtonEdit>

        <ButtonEdit activeOpacity={.7}>
          <Wrapper>
            <Sitemap width={18} height={18} color={theme.colors.text} />
            <ButtonText>Maculino</ButtonText>
            <ComingSoon>Em breve</ComingSoon>
          </Wrapper>

          <ArrowRight width={28} height={28} color={theme.colors.text} />
        </ButtonEdit>

        <Prefix>Preferências</Prefix>

        <ButtonEdit activeOpacity={.7}>
          <Wrapper>
            <CalendarAlt width={18} height={18} color={theme.colors.text} />
            <ButtonText>Abrir um chamado</ButtonText>
            <ComingSoon>Em breve</ComingSoon>
          </Wrapper>

          <ArrowRight width={28} height={28} color={theme.colors.text} />
        </ButtonEdit>

        <Prefix>Mais</Prefix>

        <ButtonEdit activeOpacity={.7}>
          <Wrapper>
            <QuestionCircle width={18} height={18} color={theme.colors.text} />
            <ButtonText>Ajuda</ButtonText>
            <ComingSoon>Em breve</ComingSoon>
          </Wrapper>

          <ArrowRight width={28} height={28} color={theme.colors.text} />
        </ButtonEdit>

        <ButtonEdit activeOpacity={.7} onPress={signOut}>
          <Wrapper>
            <Signout width={18} height={18} color={theme.colors.text} />
            <ButtonText>SignOut</ButtonText>
          </Wrapper>

          <ArrowRight width={28} height={28} color={theme.colors.text} />
        </ButtonEdit>
      </Main>
    </Container>
  );
}
