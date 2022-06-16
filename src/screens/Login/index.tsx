import React from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import {
  Container,
  SettingTop,
  MainScroll,
  WrapperForm,
  WrapperButton,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainScroll showsVerticalScrollIndicator={false}>
          <Container>
            <SettingTop source={require("../../assets/bg_setting_top.png")} />

            <WrapperForm>
              <Input label="Email:" placeholder="Digite seu email" />

              <Input label="Senha:" placeholder="Digite sua senha" />

              <WrapperButton>
                <Button title="Registrar" onPress={() => {}} />
              </WrapperButton>
            </WrapperForm>
          </Container>
        </MainScroll>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
