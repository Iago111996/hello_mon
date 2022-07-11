import React from "react";

import { Container, IconImage } from "./styles";

interface TabbarIconProps {
  focused: boolean;
  size: number;
  color: string;
}

export function TabbarIcon({ focused, size, color }: TabbarIconProps) {
  return (
    <Container>
      <IconImage
        size={size}
        source={require("../../assets/tabbar_baby_s.png")}
      />
    </Container>
  );
}
