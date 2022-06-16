import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const InputComponent = styled(TextInput)`
  width: 100%;
  height: ${RFValue(48)}px;

  background-color: ${({ theme }) => theme.colors.shape};

  margin-bottom: 16px;

  padding: 10px 18px;

  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray_line};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text};
`;
