import React, { useState } from "react";
import { useTheme } from "styled-components";
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
import { DateTimePicker } from "../../components/DateTimePicker";

interface RoutesProps extends StackNavigationProp<RootStackParamList> {}

import { useAuth } from "../../hooks/useAuth";

export function Register() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [ultrasoundDate, setUltrasoundDate] = useState(new Date());
  const [menstruationDate, setMenstruationDate] = useState(new Date());

  const [ultrasoundDateVisible, setUltrasoundDateVisibility] = useState(false);
  const [menstruationDateVisible, setMenstruationDateVisibility] =
    useState(false);

  const showDatePickerUltrasound = () => {
    setUltrasoundDateVisibility(true);
  };

  const hideDatePickerUltrasound = () => {
    setUltrasoundDateVisibility(false);
  };

  const showDatePickerMenstruation = () => {
    setMenstruationDateVisibility(true);
  };

  const hideDatePickerMenstruation = () => {
    setMenstruationDateVisibility(false);
  };

  const theme = useTheme();

  const navigation = useNavigation<RoutesProps>();
  const route = useRoute();

  const { createAccount, supplementaryData } = useAuth();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleCreateAccount() {
    try {
      if (email == "") {
        Alert.alert("O campo Email é obrigatório.");
        return;
      }
      if (password == "") {
        Alert.alert("O campo Senha é obrigatório.");
        return;
      }

      await createAccount(email, password);
      setStep(2);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }

  async function handleSupplementaryData() {
    try {
      await supplementaryData(name, age, ultrasoundDate, menstruationDate);
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

                <Button
                  title="Salvar e continuar"
                  onPress={() => handleCreateAccount()}
                  color={theme.colors.secondary}
                />
              </WrapperForm>
            )}

            {step === 2 && (
              <WrapperForm>
                <WrapperButton>
                  <Input
                    label="Nome:"
                    keyboardType="name-phone-pad"
                    placeholder="Digite seu Nome"
                    value={name}
                    onChangeText={(b) => setName(b)}
                  />

                  <Input
                    label="Idade:"
                    placeholder="Digite sua Idade"
                    keyboardType="numeric"
                    value={String(age)}
                    onChangeText={(b) => setAge(Number(b))}
                  />

                  <DateTimePicker
                    mode="date"
                    title="Última menstruação:"
                    intialDate={menstruationDate}
                    getData={setMenstruationDate}
                    showDatePicker={showDatePickerMenstruation}
                    hideDatePicker={hideDatePickerMenstruation}
                    isDatePickerVisible={menstruationDateVisible}
                  />

                  <DateTimePicker
                    mode="date"
                    title="Última ultrassom:"
                    intialDate={ultrasoundDate}
                    getData={setUltrasoundDate}
                    showDatePicker={showDatePickerUltrasound}
                    hideDatePicker={hideDatePickerUltrasound}
                    isDatePickerVisible={ultrasoundDateVisible}
                  />

                  <WrapperButton>
                    <Button
                      title="Salvar"
                      onPress={() => handleSupplementaryData()}
                      color={theme.colors.secondary}
                    />
                  </WrapperButton>
                </WrapperButton>
              </WrapperForm>
            )}
          </Container>
        </MainScroll>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
