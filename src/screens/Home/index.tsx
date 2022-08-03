import React, { useState, useEffect } from "react";
import { Dimensions, ImageBackground } from "react-native";

import {
  Container,
  MainScroll,
  Title,
  WrapperImgBaby,
  ImgBaby,
  WrapperInfos,
  TextDanger,
  Text,
  WrapperText
} from "./styles";

import Messages from "../../global/utils/data/message.json";
import moment from "moment";

export function Home() {
  const [day, setDay] = useState(0);
  const [week, setWeek] = useState(0);

  const WIDTH = Dimensions.get("screen").width;
  const date = moment(new Date()).subtract(68, "days");
  const days = moment().diff(date, "days");

  function calcTimefromPregnancy() {
    const currentWeek = days / 7;
    const currentDay = days % 7;

    setWeek(Math.ceil(currentWeek));
    setDay(currentDay == 0 ? 6 : currentDay - 1);
  }

  function formateDate() {
    const months = moment().diff(date, "months");
    const days = months > 0 ? moment().diff(date, "days") - (31 * months) : moment().diff(date, "days");

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

  useEffect(() => { calcTimefromPregnancy() }, []);

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
          <Title key={Messages[0].id}>{Messages[week].message[day]} {day} {week}</Title>
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
            <WrapperText>
              <TextDanger>{formateDate()}</TextDanger>

              <Text>Seu bebê vai te encontrar em <TextDanger>{280 - days} {days > 1 ? `Dias` : `Dia`}</TextDanger></Text>
            </WrapperText>
          </ImageBackground>
        </WrapperInfos>

      </ImageBackground>
    </Container>
  );
}
