import React from "react";
import { TextInputProps } from "react-native";

import { Container, Title, InputComponent } from "./styles";

interface InputProps extends TextInputProps {
  label?: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      {label && <Title>{label}</Title>}

      <InputComponent {...rest} />
    </Container>
  );
}
