import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container
} from './styles';

import { ArrowLeft } from 'react-native-unicons';
import { useTheme } from 'styled-components';

interface IconButtonProps extends RectButtonProps {}

export function IconButton({...rest}: IconButtonProps) {
  const theme = useTheme();

  return(
    <Container {...rest}>
      <ArrowLeft
        width={32}
        height={32}
        stroke={theme.colors.text}
        color={theme.colors.gray}
     />
    </Container>
);
};