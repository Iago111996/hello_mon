import React, { useState } from "react";
import { useTheme } from "styled-components";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/auth.routes";

import {
  Container,
  SettingTop,
  MainScroll,
  WrapperForm,
  WrapperButton,
  WrapperIconButton,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IconButton } from "../../components/IconButton";

interface RoutesProps extends StackNavigationProp<RootStackParamList> {}

export function Register() {
  const [step, setStep] = useState(1);

  const theme = useTheme();

  const navigation = useNavigation<RoutesProps>();
  const route = useRoute();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainScroll
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <Container>
            <WrapperIconButton>
              <IconButton onPress={handleGoBack} />
            </WrapperIconButton>
            <SettingTop source={require("../../assets/bg_setting_top.png")} />

            {step === 1 && (
              <WrapperForm>
                <Input label="Email:" placeholder="Digite seu email" />

                <Input label="Senha:" placeholder="Digite sua senha" />

                <WrapperButton>
                  <Button
                    title="Salvar e continuar"
                    onPress={() => setStep(2)}
                    color={theme.colors.secondary}
                  />
                </WrapperButton>
              </WrapperForm>
            )}

            {step === 2 && (
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
                    title="Registrar"
                    onPress={() => {}}
                    color={theme.colors.secondary}
                  />
                </WrapperButton>
              </WrapperForm>
            )}
          </Container>
        </MainScroll>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
