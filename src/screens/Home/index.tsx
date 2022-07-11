import React from "react";
import { ImageBackground } from "react-native";

import { Container, MainScroll, Logo, Title } from "./styles";

export function Home() {
  return (
    <Container>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/bg_baby.png")}
      >
        <MainScroll>
          <Title>
            Whether this screen should be unmounted when navigating away from
            it. Unmounting a screen resets any local state in the screen as well
            as state of nested navigators in the screen. Defaults to false.
            Normally, we don't recommend enabling this prop as users don't
            expect their navigation history to be lost when switching tabs. If
            you enable this prop, please consider if this will actually provide
            a better experience for the user.
          </Title>
        </MainScroll>
      </ImageBackground>
    </Container>
  );
}
