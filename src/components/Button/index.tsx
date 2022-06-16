import React from "react";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";
import { Load } from "../Load";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  onPress: () => void;
  loading?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  loading,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      onPress={onPress}
      color={color}
      disabled={loading}
      activeOpacity={0.7}
      {...rest}
    >
      {loading ? <Load color={theme.colors.shape} /> : <Title>{title}</Title>}
    </Container>
  );
}
