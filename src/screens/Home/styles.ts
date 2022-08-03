import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  position: relative;
`;

export const Logo = styled.Image`
  width: 100%;
`;


export const ImgBaby = styled.Image`
`;

export const WrapperImgBaby = styled.View`
  position: absolute;
  top: ${Dimensions.get("screen").height / 2.2}px;
  left:${Dimensions.get("screen").width / 2.4}px;

  transform: rotate(35deg);
`;

export const WrapperInfos = styled.View`
  margin-top: ${Dimensions.get("screen").height / 1.5}px;
`;

export const WrapperText = styled.View`
  width: 100%;
`;

export const MainScroll = styled.ScrollView`
  width: 270px;
  height: 280px;

  background: ${({ theme }) => theme.colors.shape};

  margin-top: 40px;
  margin-left: 16px;

  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.colors.gray_line};

  position: absolute;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.title};
`;

export const TextDanger = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  font-weight: 400;
  text-align: center;

  color: ${({ theme }) => theme.colors.primary};

  margin-top: 68px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(13)}px;
  font-weight: 400;
  text-align: center;

  color: ${({ theme }) => theme.colors.text};
`;
