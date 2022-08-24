import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
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
import { useAuth } from "../../hooks/useAuth";

interface RoutesProps extends StackNavigationProp<RootStackParamList> {}

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<RoutesProps>();
  const route = useRoute();

  const { signIn } = useAuth();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSignIn() {
    try {
      if(email == "") {
        Alert.alert("O campo Email é obrigatório.");
        return
      }
      if(password == "") {
        Alert.alert("O campo Senha é obrigatório.");
        return
      }

      await signIn(email, password);
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
                keyboardType="email-address"
                autoCorrect={false}
                value={email}
                onChangeText={(b) => setEmail(b)}
              />

              <Input
                label="Senha:"
                placeholder="Digite sua senha"
                secureTextEntry={true}
                autoCorrect={false}
                value={password}
                onChangeText={(b) => setPassword(b)}
              />

              <WrapperButton>
                <Button title="Logar" onPress={() => handleSignIn()} />
              </WrapperButton>
            </WrapperForm>
          </Container>
        </MainScroll>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
