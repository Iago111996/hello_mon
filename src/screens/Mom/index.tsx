import React, { useState } from "react";
import { useTheme } from "styled-components";
import {
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/auth.routes";

import { Edit } from 'react-native-unicons';

import {
  Container,
  Img,
  MainScroll,
  WrapperForm,
  WrapperButton,
  WrapperImage,
  ImgAvatar,
  ButtonEdit,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

interface RoutesProps extends StackNavigationProp<RootStackParamList> { }

export function MomPage() {
  const theme = useTheme();

  const navigation = useNavigation<RoutesProps>();
  const route = useRoute();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <MainScroll
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <ImageBackground
            style={{ width: "100%", height: 400 }}
            source={require("../../assets/bg_setting_top1.png")}
          >
            <WrapperImage>
              <ImgAvatar source={require("../../assets/img_baby.png")} />

              <ButtonEdit>
                <Edit
                  width={22}
                  height={22}
                  color={theme.colors.text}
                />
              </ButtonEdit>
            </WrapperImage>
          </ImageBackground>

          <WrapperForm>
            <Input label="Nome:" placeholder="Digite seu Nome" />

            <Input label="Idade:" placeholder="Digite sua Idade" />

            <Input
              label="Última menstruação:"
              placeholder="Digite a data"
            />

            <Input label="Última ultrassom:" placeholder="Digite a data" />

            <WrapperButton>
              <Button
                title="Salvar"
                onPress={() => { }}
                color={theme.colors.secondary}
              />
            </WrapperButton>
          </WrapperForm>
        </Container>
      </MainScroll>
    </TouchableWithoutFeedback>
  );
}
