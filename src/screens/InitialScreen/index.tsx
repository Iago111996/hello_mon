import React from "react";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";

import { Container, SettingTop, WrapperButton } from "./styles";

export function Initialscreen() {
  const theme = useTheme();

  return (
    <Container>
      <SettingTop
        height={50}
        resizeMode="cover"
        source={require("../../assets/bg_setting_top.png")}
      />

      <WrapperButton>
        <Button title="Logar" onPress={() => {}} color={theme.colors.secondary} />

        <Button title="Registre-se" onPress={() => {}}  />
      </WrapperButton>
    </Container>
  );
}
