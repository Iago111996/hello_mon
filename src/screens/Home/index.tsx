import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Alert, Dimensions, ImageBackground } from "react-native";

import {
  Container,
  MainScroll,
  Title,
  WrapperImgBaby,
  ImgBaby,
  WrapperInfos,
  TextDanger,
  Text,
  WrapperText,
} from "./styles";

import moment from "moment";
import Messages from "../../global/utils/data/message.json";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebase-config";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";
import { Load } from "../../components/Load";

export function Home() {
  const [day, setDay] = useState(0);
  const [week, setWeek] = useState(0);
  const [menstruationDate, setMenstruationDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const WIDTH = Dimensions.get("screen").width;

  async function getInfoUser() {
    setLoading(true);
    onSnapshot(doc(db, "users", user!.uid), (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setMenstruationDate(new Date(data.menstruationDate.toDate()));
        setLoading(false);
      } else {
        Alert.alert("Algo deu errado!");
        setLoading(false);
      }
    });
  }

  const days = useMemo(() => {
    const days = moment(new Date()).diff(menstruationDate, "days");

    return days;
  }, [menstruationDate]);

  const calcTimefromPregnancy = useMemo(() => {
    const currentWeek = days / 7;
    const currentDay = days % 7;

    setWeek(Math.ceil(currentWeek));
    setDay(currentDay == 0 ? 6 : currentDay - 1);
  }, [days]);

  function formateDate() {
    const months = moment().diff(menstruationDate, "months");
    const days =
      months > 0
        ? moment().diff(menstruationDate, "days") - 31 * months
        : moment().diff(menstruationDate, "days");

    const wordMonth = months > 1 ? `Meses` : `Mês`;
    const wordDay = days > 1 ? `Dias` : `Dia`;

    if (months > 0 && days > 0) {
      return `${months} ${wordMonth} e ${days} ${wordDay}`;
    }

    if (months > 0 && days == 0) {
      return `${months} ${wordMonth}`;
    }

    if (months == 0 && days > 0) {
      return `${days} ${wordDay}`;
    }
  }

  useEffect(() => {
    getInfoUser();
  }, []);

  return (
    <Container>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/bg_baby.png")}
      >
        <MainScroll
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 16 }}
        >
          {loading ? (
            <Load />
          ) : (
            <Title key={Messages[0].id}>{Messages[week].message[day]}</Title>
          )}
        </MainScroll>

        <WrapperImgBaby>
          <ImgBaby
            style={{ width: 64, height: 132 }}
            source={require("../../assets/img_baby.png")}
          />
        </WrapperImgBaby>

        <WrapperInfos>
          <ImageBackground
            style={{ width: WIDTH, height: 180 }}
            source={require("../../assets/img_baby_bottom.png")}
          >
            {loading ? (
              <Load />
            ) : (
              <WrapperText>
                <TextDanger>{formateDate()}</TextDanger>

                <Text>
                  Seu bebê vai te encontrar em{" "}
                  <TextDanger>
                    {280 - days} {days > 1 ? `Dias` : `Dia`}
                  </TextDanger>
                </Text>
              </WrapperText>
            )}
          </ImageBackground>
        </WrapperInfos>
      </ImageBackground>
    </Container>
  );
}
