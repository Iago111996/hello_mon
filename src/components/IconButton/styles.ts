import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;

  background-color: ${({ theme }) => theme.colors.primary_light};

  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.text};

  justify-content: center;
  align-items: center;
`;
