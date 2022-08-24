import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(64)}px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.title};

  margin-top: 24px;
`;

export const Main = styled.View``;

export const ButtonEdit = styled(TouchableOpacity)`
    width: 100%;
    height: ${RFValue(48)}px;

    flex-direction: row;
    align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.title};
`;
