import React from "react";

import { Container, IconImage } from "./styles";

interface TabbarIconProps {
  focused: boolean;
}

export function TabbarIcon({ focused }: TabbarIconProps) {
  return (
    <Container focused={focused}>
      <IconImage source={require("../../assets/tabbar_baby_s.png")} />
    </Container>
  );
}
