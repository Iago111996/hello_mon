import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

interface LoadProps {
  color?: string;
}

export function Load({ color }: LoadProps) {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={color ? color : theme.colors.primary_sales}
      size="large"
      style={{ flex: 1 }}
    />
  );
}
