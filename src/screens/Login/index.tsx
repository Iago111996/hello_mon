import React, { useState } from "react";
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

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface RoutesProps extends StackNavigationProp<RootStackParamList> {}

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const navigation = useNavigation<RoutesProps>();
  const route = useRoute();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSignIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("conta criada!");
      const user = userCredential.user;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
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
              <Input
                label="Email:"
                placeholder="Digite seu email"
                value={email}
                onChangeText={(b) => setEmail(b)}
              />

              <Input
                label="Senha:"
                placeholder="Digite sua senha"
                value={password}
                onChangeText={(b) => setPassword(b)}
              />

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
