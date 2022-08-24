import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import {
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Alert,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/auth.routes";

import { Edit } from "react-native-unicons";

import {
  Container,
  Img,
  MainScroll,
  WrapperForm,
  WrapperButton,
  WrapperImage,
  ImgAvatar,
  ButtonEdit,
  WrapperLoad,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { DateTimePicker } from "../../components/DateTimePicker";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebase-config";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";
import { Load } from "../../components/Load";

interface RoutesProps extends StackNavigationProp<RootStackParamList> {}

export function MomPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [ultrasoundDate, setUltrasoundDate] = useState(new Date());
  const [menstruationDate, setMenstruationDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const [ultrasoundDateVisible, setUltrasoundDateVisibility] = useState(false);
  const [menstruationDateVisible, setMenstruationDateVisibility] =
    useState(false);

  const { user } = useAuth();

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

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

  function handleGoBack() {
    navigation.goBack();
  }

  async function getInfoUser() {
    try {
      setLoading(true);
      const docRef = doc(db, "users", user!.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setName(data.name);
        setAge(data.age);
        setUltrasoundDate(new Date(data.ultrasoundDate.toDate()));
        setMenstruationDate(new Date(data.menstruationDate.toDate()));
      } else {
        Alert.alert("Algo deu errado!");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function supplementaryData() {
    try {
      setLoadingUpdate(true);
      const obj = {
        name,
        age,
        ultrasoundDate,
        menstruationDate,
      };

      await setDoc(doc(db, "users", user!.uid), obj);
      Alert.alert("Atualização feita com sucesso!")
      setLoadingUpdate(false);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert(errorMessage);
    }
  }

  useEffect(() => {
    getInfoUser();
  }, []);

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
                <Edit width={22} height={22} color={theme.colors.text} />
              </ButtonEdit>
            </WrapperImage>
          </ImageBackground>

          {loading ? (
            <WrapperLoad>
              <Load />
            </WrapperLoad>
          ) : (
            <WrapperForm>
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
                {loadingUpdate ? (
                  <Load />
                ) : (
                  <Button
                    title="Salvar"
                    onPress={() => supplementaryData()}
                    color={theme.colors.secondary}
                  />
                )}
              </WrapperButton>
            </WrapperForm>
          )}
        </Container>
      </MainScroll>
    </TouchableWithoutFeedback>
  );
}
