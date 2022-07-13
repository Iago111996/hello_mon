import React, { ReactNode } from "react";

import { Container } from "./styles";

interface TabbarIconProps {
  focused: boolean;
  img: ReactNode;
}

export function TabbarIconSecondary({ focused, img }: TabbarIconProps) {
  return <Container focused={focused}>{img}</Container>;
}
