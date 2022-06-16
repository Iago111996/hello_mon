import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  color?: string;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: ${RFValue(48)}px;

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.primary};

  justify-content: center;
  align-items: center;

  border-radius: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};
`;
