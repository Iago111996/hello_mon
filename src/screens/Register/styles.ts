import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: ${({ theme}) => theme.colors.shape};
`;

export const SettingTop = styled.Image`
  width: 100%;
  height: 350px;
`;

export const MainScroll = styled.ScrollView`
  flex: 1;
  height: 100%;
`;

export const WrapperForm = styled.View`
  padding: 0 16px;
`;

export const WrapperButton = styled.View`
  margin-top: 32px;
`;

export const WrapperIconButton = styled.View`
  position: absolute;

  margin-left: 16px;
  margin-top: 32px;

  z-index: 1;
`;
