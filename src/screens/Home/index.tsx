import React from "react";
import { ImageBackground } from "react-native";

import {
  Container,
  MainScroll,
  Title,
  WrapperImgBaby,
  ImgBaby,
} from "./styles";

import Messages from "../../global/utils/data/message.json";

export function Home() {

  function calcTimefromPregnancy() {
    const DUM = new Date();
    const today = new Date();

    // const time = 
  }

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
          {<Title key={Messages[0].id}>{Messages[0].message[0]}</Title>}
        </MainScroll>

        <WrapperImgBaby>
          <ImgBaby
            style={{ width: 64, height: 132 }}
            source={require("../../assets/img_baby.png")}
          />
        </WrapperImgBaby>
      </ImageBackground>
    </Container>
  );
}
