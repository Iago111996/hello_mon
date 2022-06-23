import React from "react";
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

export function Login() {
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
        <MainScroll showsVerticalScrollIndicator={false}>
          <WrapperIconButton>
            <IconButton onPress={handleGoBack} />
          </WrapperIconButton>
          <Container>
            <SettingTop source={require("../../assets/bg_setting_top.png")} />

            <WrapperForm>
              <Input label="Email:" placeholder="Digite seu email" />

              <Input label="Senha:" placeholder="Digite sua senha" />

              <WrapperButton>
                <Button title="Logar" onPress={() => {}} />
              </WrapperButton>
            </WrapperForm>
          </Container>
        </MainScroll>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
